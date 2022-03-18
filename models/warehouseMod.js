const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const helper = require("../utils/helpers");

const getAllData = () => {
  const warehouseData = helper.readData("./data/warehouses.json");
  return warehouseData;
};
const getIndividual = (currProductId) => {
  const productsData = helper.readData("./data/warehouses.json");
  const currProduct = productsData.find(
    (product) => product.id === currProductId
  );
  console.log(currProduct);
  return currProduct;
};

const addNewWarehouse = (newWarehouseData) => {
  const newWarehouse = {
    id: uuidv4(),
    ...newWarehouseData,
  };

  const warehouseFileContent = helper.readData("./data/warehouses.json");
  warehouseFileContent.push(newWarehouse);
  helper.writeData("./data/warehouses.json", warehouseFileContent);
  return newWarehouse;
};

const updateWarehouseById = (warehouseId, updateValues) => {
  const updatedWarehouse = getAllData().map((warehouse) =>
    warehouse.id === warehouseId ? { ...warehouse, ...updateValues } : warehouse
  );
  helper.writeData("./data/warehouses.json", updatedWarehouse);
  return updatedWarehouse;
};

module.exports = {
  getAllData,
  getIndividual,
  addNewWarehouse,
  updateWarehouseById,
};
