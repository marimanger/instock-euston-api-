const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const inventoryController = require("../controllers/inventoryCon");

// inventory routes
router.get("/inventory", inventoryController.getAllData);
router.get("/inventorypage", inventoryController.getSomeData);
router.get(
  "/inventory/:inventoryId",
  inventoryController.getIndividualInventory
);
router.delete("/inventory/:id", inventoryController.deleteInventoryItem);

module.exports = router;
