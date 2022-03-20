const inventoryModel = require("../models/inventoryMod");
const helper = require("../utils/helpers");

const getAllData = (_req, res) => {
  const inventory = inventoryModel.getAllData();
  res.status(200).json(inventory);
};

const getSomeData = (_req, res) => {
  const inventory = inventoryModel.getSomeData();
  // console.log(inventory)
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

// add a new warehouse
const addNewInventory = (req, res) => {
  const { itemName, description, category, status, quantity, warehouseName } =
    req.body;
  if (
    !itemName ||
    !description ||
    !category ||
    !status ||
    !quantity ||
    !warehouseName
  ) {
    res
      .status(400)
      .send(
        "You need to provide info for all the required fields to add a new Inventory."
      );
  } else {
    const newInventory = inventoryModel.addNewInventory(req.body);
    res.status(201).json(newInventory);
  }
};

// const addNewInventory = (req, res) => {
//   const newVideo = {
//     id: uniqid(),
//     title: req.body.title,
//     warehouseName: req.body.warehouseName,
//     description: req.body.description,
//     status: req.body.status,
//     quantity: req.body.quantity,
//     warehouseName: req.body.warehouseName,
//   };
//   res
//     .status(400)
//     .send(
//       "You need to provide info for all the required fields to add a new Warehouse, Make sure the phone number has between 10 and 11 digits and the email address includes the '@'"
//     );
//   {
//     const newInventory = inventoryModel.addNewInventory(req.body);
//     res.status(201).json(newInventory);
//   }
// };

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
  addNewInventory,
};
