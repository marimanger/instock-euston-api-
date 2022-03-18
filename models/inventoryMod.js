const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const helper = require("../utils/helpers");

const getAllData = () => {
  const inventoryData = helper.readData("./data/inventories.json");
  return inventoryData;
};

const getIndividualInventory = (currInverntoryId) => {
  const inventoryData = helper.readData("./data/inventories.json");
  const currInventory = inventoryData.find(
    (inventory) => inventory.id === currInverntoryId
  );
  return currInventory;
};
//used in helper function instead
// const readData = () => {
//   // Your route is relative to where index.js is
//   return JSON.parse(fs.readFileSync("./data/warehouses.json"));
// };
// const writeData = (myData) => {
//   fs.writeFileSync("./data/warehouses.json", JSON.stringify(myData));
// };

module.exports = {
  getAllData,
  getIndividualInventory,
  // createProduct,
};
