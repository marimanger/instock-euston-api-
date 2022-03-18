const warehouseModel = require("../models/warehouseMod");

const getAllData = (_req, res) => {
  const warehouse = warehouseModel.getAllData();
  res.status(200).json(warehouse);
};

const addNewWarehouse = (req, res) => {
  const { name, address, city, country, contact } = req.body;
  if (
    !name ||
    !address ||
    !city ||
    !country ||
    !contact.name ||
    !contact.position ||
    !contact.phone ||
    !contact.email
  ) {
    res
      .status(400)
      .send(
        "You need to provide info for all the required fields to add a new Warehouse"
      );
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
