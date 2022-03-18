const inventoryModel = require("../models/inventoryMod");

const getAllData = (_req, res) => {
  const inventory = inventoryModel.getAllData();
  res.status(200).json(inventory);
};

const getSomeData = (_req, res) => {
  const inventory = inventoryModel.getSomeData();
  // console.log(inventory)
  const someI=[]
  for(i=0; i< inventory.length; i++){
    someI[i]={
      "itemName":inventory[i].itemName,
      "category":inventory[i].category,
      "quantity":inventory[i].quantity,
      "id":inventory[i].id,
      "warehouseID":inventory[i].warehouseID
    }

  }
  res.status(200).json(someI);
};

// const getIndividual = (req, res) => {
//   const currentID = req.params.productId;
//   const currentProduct = productModel.getIndividual(currentID);
//   res.status(200).json(currentProduct);
// };
const getIndividualInventory = (req, res) => {
  const currentID = req.params.inventoryId;
  const currentInventory = inventoryModel.getIndividualInventory(currentID);
  res.status(200).json(currentInventory);
};

// const createProduct = (req, res) => {
//   if (!req.body.name || !req.body.price) {
//     res.status(400).send("You need to provude the name and price of the item");
//   }
//   const newProduct = productModel.createProduct(req.body);
//   res.status(201).json(newProduct);
// };

module.exports = {
  getAllData,
  getSomeData,
  // getIndividual,
  getIndividualInventory,
  // createProduct,
};
