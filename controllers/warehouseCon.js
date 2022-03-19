const warehouseModel = require("../models/warehouseMod");
const helper = require("../utils/helpers");

// get all warehouse data
const getAllData = (_req, res) => {
  const warehouse = warehouseModel.getAllData();
  res.status(200).json(warehouse);
};

// get a single warehouse
const getIndividual = (req, res) => {
  console.log(req.params.id);
  const currentID = req.params.id;
  const currentProduct = warehouseModel.getIndividual(currentID);
  res.status(200).json(currentProduct);
};

// add a new warehouse
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
    contact.phone.length < 11 ||
    contact.phone.length > 11 ||
    !contact.email ||
    contact.email.includes("@") === false
  ) {
    res
      .status(400)
      .send(
        "You need to provide info for all the required fields to add a new Warehouse, Make sure the phone number has between 10 and 11 digits and the email address includes the '@'"
      );
  } else {
    const newWarehouse = warehouseModel.addNewWarehouse(req.body);
    res.status(201).json(newWarehouse);
  }
};

// edit existing warehouse
const editWarehouse = (req, res) => {
  const { name, address, city, country, contact } = req.body;
  if (
    !name ||
    !address ||
    !city ||
    !country ||
    !contact.name ||
    !contact.position ||
    !contact.phone ||
    contact.phone.length < 11 ||
    contact.phone.length > 11 ||
    !contact.email ||
    contact.email.includes("@") === false
  ) {
    res
      .status(400)
      .send(
        "You need to provide info for all the required fields to add a new Warehouse, Make sure the phone number has between 10 and 11 digits and the email address includes the '@'"
      );
  } else {
    const found = helper.findById(warehouseModel.getAllData(), req.params.id);
    if (found) {
      const updatedWarehouse = warehouseModel.updateWarehouseById(
        req.params.id,
        {
          ...req.body,
        }
      );
      res.status(201).json({
        msg: `Warehouse Updated, New name: ${req.body.name} `,
        warehouse: updatedWarehouse,
      });
    } else {
      res.status(404).json({
        errorMessage: `Warehouse ${req.params.name} with ID: ${req.params.id} not found`,
      });
    }
  }
};

// delete existing warehouse
const deleteWarehouse = (req, res) => {
  const found = helper.findById(warehouseModel.getAllData(), req.params.id);
  if (found) {
    const deletedWarehouse = warehouseModel.deleteWarehouseById(req.params.id);
    res.status(200).json({
      msg: "Warehouse has been successfully deleted",
      warehouse: deletedWarehouse,
    });
  } else {
    res.status(404).json({
      errorMessage: `Warehouse ${req.params.name} with ID: ${req.params.id} not found`,
    });
  }
};

module.exports = {
  getAllData,
  getIndividual,
  addNewWarehouse,
  editWarehouse,
  deleteWarehouse,
};
