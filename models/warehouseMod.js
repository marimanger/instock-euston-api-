const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const helper = require("../utils/helpers");

//used in helper function instead
// const readData = () => {
//   // Your route is relative to where index.js is
//   return JSON.parse(fs.readFileSync("./data/warehouses.json"));
// };
// const writeData = (myData) => {
//   fs.writeFileSync("./data/warehouses.json", JSON.stringify(myData));
// };
// const getIndividual = (currProductId) => {
//   const productsData = readData();
//   const currProduct = productsData.find(
//     (product) => product.id === currProductId
//   );
//   return currProduct;
// };

const getAllData = () => {
  const warehouseData = helper.readData("./data/warehouses.json");
  return warehouseData;
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

module.exports = {
  getAllData,
  // getIndividual,
  addNewWarehouse,
};
