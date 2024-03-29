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

//Add new Inventory
const addNewInventory = (newInventoryData) => {
  const newInventory = {
    id: uuidv4(),
    ...newInventoryData,
  };

  const inventoryFileContent = helper.readData("./data/inventories.json");
  inventoryFileContent.push(newInventory);
  helper.writeData("./data/inventories.json", inventoryFileContent);
  return newInventory;
};

const updateInventoryById = (inventoryId, updateValues) => {
  const updatedInventory = getAllData().map((inventory) =>
    inventory.id === inventoryId ? { ...inventory, ...updateValues } : inventory
  );
  helper.writeData("./data/inventories.json", updatedInventory);
  return updatedInventory;
};

const deleteInventoryById = (inventoryId) => {
  const deletedInventory = getAllData().filter(
    (inventory) => inventory.id !== inventoryId
  );
  helper.writeData("./data/inventories.json", deletedInventory);
  return deletedInventory;
};

// const deleteInventoryById = (inventoryId) => {
//   const inventoryData = helper.readData("./data/inventories.json");
//   const currInventory = inventoryData.find(
//     (inventory) => inventory.id === inventoryId
//   );
//   return currInventory;
// };

module.exports = {
  getAllData,
  getSomeData,
  getIndividualInventory,
  deleteInventoryById,
  addNewInventory,
  updateInventoryById,
};
