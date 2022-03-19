const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const helper = require("../utils/helpers");

const getAllData = () => {
  const inventoryData = helper.readData("./data/inventories.json");
  return inventoryData;
};
const getSomeData = () => {
  const someInventoryData = helper.readData("./data/inventories.json");
  return someInventoryData;
};

const inventoryData = () => {
  helper.readData("./data/inventories.json");
  return inventoryData;
};

const getIndividualInventory = (currInverntoryId) => {
  const inventoryData = helper.readData("./data/inventories.json");
  const currInventory = inventoryData.find(
    (inventory) => inventory.id === currInverntoryId
  );
  return currInventory;
};

const deleteInventoryById = (inventoryId) => {
  const deletedInventory = getAllData().filter(
    (inventory) => inventory.id !== inventoryId
  );
  helper.writeData("./data/inventories.json", deletedInventory);
  return deletedInventory;
};

module.exports = {
  getAllData,
  getSomeData,
  getIndividualInventory,
  deleteInventoryById,
};
