const warehouseModel = require("../models/warehouseMod");



const getAllData = (_req, res) => {
  const warehouse = warehouseModel.getAllData();
  res.status(200).json(warehouse);
};

const getIndividual = (req, res) => {
  console.log(req.params.id)
  const currentID = req.params.id;
  const currentProduct = warehouseModel.getIndividual(currentID);
  res.status(200).json(currentProduct);
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
  getIndividual,
  // createProduct,
};
