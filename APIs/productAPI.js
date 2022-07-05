//create a separate Route for product API (mini express app)
const exp = require("express");
const productApp = exp.Router();

//to parse body of request object
productApp.use(exp.json());

//Product API (request handlers)
productApp.get("/get-products", async (request, response) => {
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //find products
  let products = await productCollectionObject.find().toArray();
  //send res
  response.send({ message: "List of Products!", payload: products });
});

//get product by name
productApp.get("/getproducts/:productname", async (request, response) => {
  //get product object
  let productCollectionObject = request.app.get("productCollectionObject");

  //get product name from url
  productnameFromURL = request.params.productname;

  //get product from db
  let productFromDB = await productCollectionObject.findOne({
    productname: productnameFromURL,
  });

  //if object exist or not
  if (productFromDB == null) {
    response.send({ message: "Product does not exist" });
  } else {
    response.send({ message: "Here's the Product!", payload: productFromDB });
  }
});

//create-product
productApp.post("/create-product", async (request, response) => {
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get product obj from client
  let productFromClient = request.body;
  //search for existing product with the given productid
  let productFromDB = await productCollectionObject.findOne({
    productid: productFromClient.productid,
  });
  //if product exists
  if (productFromDB !== null) {
    response.send({
      message: "Product ID already exists, please choose another",
    });
  }
  //if product does not exist
  else {
    //creating a product
    await productCollectionObject.insertOne(productFromClient);
    //send response
    response.send({ message: "Product Created" });
  }
});

//update-product
productApp.put("/update-products", async (request, response) => {
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get productobj from client
  let modifiedProduct = request.body;
  //search for existing product with the given productid
  let productFromDB = await productCollectionObject.findOne({
    productid: modifiedProduct.productid,
  });
  //if product does not exists
  if (productFromDB == null) {
    response.send({
      message: "There is no product with this ID, please enter the correct ID",
    });
  }
  //if product exists
  else {
    //update
    await productCollectionObject.updateOne(
      { productid: modifiedProduct.productid },
      { $set: { ...modifiedProduct } }
    );
    //send response
    response.send({ message: "Product Updated!" });
  }
});

//remove-product
//delete product by productid
productApp.delete("/delete-product/:productid", async (request, response) => {
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get productid from url
  let productidFromURL = request.params.productid;
  //delete product
  await productCollectionObject.deleteOne({
    productid: productidFromURL,
  });
  let productFromDB = await productCollectionObject.findOne({
    productid: productidFromURL,
  });
  //if product does not exist
  if (productFromDB == null) {
    response.send({ message: "Product Deleted!" });
  }
});

//export productApp
module.exports = productApp;
