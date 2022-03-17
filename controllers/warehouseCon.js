const warehouseModel = require("../models/warehouseMod");

const getAllData = (_req, res) => {
  const warehouse = warehouseModel.getAllData();
  res.status(200).json(warehouse);
};

const addNewWarehouse = (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).send("You need to provude the name and price of the item");
  }
  const newWarehouse = warehouseModel.addNewWarehouse(req.body);
  res.status(201).json(newWarehouse);
};

// const getIndividual = (req, res) => {
//   const currentID = req.params.productId;
//   const currentProduct = productModel.getIndividual(currentID);
//   res.status(200).json(currentProduct);
// };

module.exports = {
  getAllData,
  // getIndividual,
  addNewWarehouse,
};
