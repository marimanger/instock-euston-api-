const inventoryModel = require("../models/inventoryMod");
const helper = require("../utils/helpers");

const getAllData = (_req, res) => {
  const inventory = inventoryModel.getAllData();
  res.status(200).json(inventory);
};

const getSomeData = (_req, res) => {
  const inventory = inventoryModel.getSomeData();
  const someI = [];
  for (i = 0; i < inventory.length; i++) {
    someI[i] = {
      itemName: inventory[i].itemName,
      category: inventory[i].category,
      quantity: inventory[i].quantity,
      id: inventory[i].id,
      warehouseID: inventory[i].warehouseID,
    };
  }
  res.status(200).json(someI);
};

const getIndividualInventory = (req, res) => {
  const currentID = req.params.inventoryId;
  const currentInventory = inventoryModel.getIndividualInventory(currentID);
  res.status(200).json(currentInventory);
};

// delete existing inventory item
const deleteInventoryItem = (req, res) => {
  const found = helper.findById(inventoryModel.getAllData(), req.params.id);
  if (found) {
    const deletedInventory = inventoryModel.deleteInventoryById(req.params.id);
    res.status(200).json({
      msg: "Inventory item has been successfully deleted",
      Inventory: deletedInventory,
    });
  } else {
    res.status(404).json({
      errorMessage: `Inventory item ${req.params.name} with ID: ${req.params.id} not found`,
    });
  }
};

module.exports = {
  getAllData,
  getSomeData,
  getIndividualInventory,
  deleteInventoryItem,
};
