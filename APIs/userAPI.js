//create a separate Route for user API (mini express app)
const exp = require("express");
const userApp = exp.Router();

//import dotenv
require("dotenv").config();

//this modules is used to hash the password
const bcryptjs = require("bcryptjs");

//jasonwebtoken module import
const jwt = require("jsonwebtoken");
const { response } = require("express");

//const { request, response } = require("express");

//to parse body of request object
userApp.use(exp.json());

//User API(Request handlers)
//getusers
userApp.get("/get-users", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //find users
  let users = await userCollectionObject.find().toArray();
  //send res
  response.send({ message: "Users Data", payload: users });
});

//get user by username
userApp.get("/get-user/:username", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get username from url
  let usernameFromURL = request.params.username;
  //find user
  let userFromDB = await userCollectionObject.findOne({
    username: usernameFromURL,
  });
  //if user is not existing
  if (userFromDB == null) {
    response.send({ message: "User is not Found!" });
  }
  //if user is existing
  else {
    response.send({ message: "User Found!", payload: userFromDB });
  }
});

//create-user
userApp.post("/create-user", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get user obj from client
  let userFromClient = request.body;
  //search for existing user with given username
  let userFromDB = await userCollectionObject.findOne({
    username: userFromClient.username,
  });
  //if user is existing
  if (userFromDB !== null) {
    response.send({
      message: "Username is already taken, please choose another :)",
    });
  }
  //if user is not existng
  else {
    //hash the password
    let hashedPassword = await bcryptjs.hash(userFromClient.password, 6);
    //replace plain password with hashed password
    userFromClient.password = hashedPassword;
    //insert new user
    await userCollectionObject.insertOne(userFromClient);
    response.send({ message: "Success" });
  }
});

//update-user
userApp.put("/update-user", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get userobj from client
  let modifiedUser = request.body;
  //update
  await userCollectionObject.updateOne(
    { username: modifiedUser.username },
    { $set: { ...modifiedUser } }
  );
  //send response
  response.send({ message: "User Updated!" });
});

//remove-user
//delete user by uesrname
userApp.delete("/remove-user/:username", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get username from url
  let usernameFromURL = request.params.username;
  //delete user
  await userCollectionObject.deleteOne({
    username: usernameFromURL,
  });
  let userFromDB = await userCollectionObject.findOne({
    username: usernameFromURL,
  });
  //if user is not existing
  if (userFromDB == null) {
    response.send({ message: "User Deleted!" });
  }
});

//User Login
userApp.post("/login", async (request, response) => {
  //get userCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get userCredObj
  let userCredObj = request.body;
  //console.log(userCredObj);
  //search user by username
  let userFromDB = await userCollectionObject.findOne({
    username: userCredObj.username,
  });
  //if user is not existing
  if (userFromDB == null) {
    response.send({ message: "Invalid Username!" });
  }
  //if user is existing, verify password
  else {
    //verify password
    let areEqual = await bcryptjs.compare(
      userCredObj.password,
      userFromDB.password
    );
    //if passwords don't match
    if (areEqual == false) {
      response.send({ message: "Invalid Password!" });
    }
    //if credentials are valid
    else {
      //create JWT token
      let signedToken = jwt.sign(
        { username: userFromDB.username },
        process.env.SECRECT,
        {
          expiresIn: 100,
        }
      );
      //send token in response
      response.send({
        message: "success",
        token: signedToken,
        user: userFromDB,
      });
    }
  }
});

//middleware to verify the token
const verifyToken = (request, response, next) => {
  //token verification logic
  //get token from headers of request object
  let token = request.headers.authorization;
  //console.log(token);
  //if token does not exist
  if (token == undefined) {
    response.send({ message: "Unauthorized request! Please login :)" });
  }
  //if token exists
  else {
    //verify token
    try {
      jwt.verify(token, process.env.SECRECT);
      //forwared request to next middleware
      next();
    } catch (err) {
      response.send({
        message: "Session expired! Please login again to continue :)",
      });
    }
  }
};

//private route
userApp.get("/private-route", verifyToken, (request, response) => {
  response.send({ message: "This is private information!" });
});

//export userApp
module.exports = userApp;
