//create express app
const exp = require("express");
const app = exp();
const path = require("path");

//import dotenv
require("dotenv").config(); //process.env

//connect react build
app.use(exp.static(path.join(__dirname, "./build")));

//import Mongo Client
const mc = require("mongodb").MongoClient;

//MongoDB Atlas Connection String
const db_url = process.env.DATABASE_URL;

//connect with mongodb atlas
mc.connect(db_url)
  .then((client) => {
    //get Database object
    const dbObj = client.db("akshay");

    //get usercollection object
    const userCollectionObject = dbObj.collection("usercollection");
    //get productcollection object
    const productCollectionObject = dbObj.collection("productcollection");

    //share userCollectionObj
    app.set("userCollectionObject", userCollectionObject);
    //share productCollectionObj
    app.set("productCollectionObject", productCollectionObject);

    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log("Error in DB connection", err);
  });

//imports APIs
const userApp = require("./APIs/userAPI");
const productApp = require("./APIs/productAPI");

//if path starts with "/user", userApp should be executed
app.use("/user", userApp);
//if path starts with "/productr", productApp should be executed
app.use("/product", productApp);

//dealing with page refresh
app.use("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./build/index.html"));
});

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//to parse body of request object
app.use(exp.json());

//assign port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server on port ${port}...`));

/*
//test middleware
const testMiddleware1 = (request, response, next) => {
  console.log("Middleware-1 Executed");
  //send response
  //response.send({ message: "This reply is from Middleware!" });
  //forward request to next middleware
  next();
};

const testMiddleware2 = (request, response, next) => {
  console.log("Middleware-2 Executed");
  //send response
  //response.send({ message: "This reply is from Middleware!" });
  //forward request to next middleware
  next();
};
//user middleware for request
app.use(testMiddleware1);
app.use(testMiddleware2);
*/
