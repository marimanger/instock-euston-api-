const inventoryModel = require("../models/inventoryMod");

const getAllData = (_req, res) => {
  const inventory = inventoryModel.getAllData();
  res.status(200).json(inventory);
};

// const getIndividual = (req, res) => {
//   const currentID = req.params.productId;
//   const currentProduct = productModel.getIndividual(currentID);
//   res.status(200).json(currentProduct);
// };

// const createProduct = (req, res) => {
//   if (!req.body.name || !req.body.price) {
//     res.status(400).send("You need to provude the name and price of the item");
//   }
//   const newProduct = productModel.createProduct(req.body);
//   res.status(201).json(newProduct);
// };

module.exports = {
  getAllData,
  // getIndividual,
  // createProduct,
};
