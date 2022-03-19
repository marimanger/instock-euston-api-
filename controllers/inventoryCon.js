const inventoryModel = require("../models/inventoryMod");

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

const addNewInventory = (req, res) => {
  const { name, description, city, country, contact } = req.body;
  if (
    !name ||
    !description ||
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

module.exports = {
  getAllData,
  getSomeData,
  getIndividualInventory,
};
