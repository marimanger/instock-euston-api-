const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const inventoryController = require("../controllers/inventoryCon");

// examples
router.get("/inventory", inventoryController.getAllData);
router.get("/inventorypage", inventoryController.getSomeData);
router.put("/inventory/:id/edit", inventoryController.editInventory);
router.get(
  "/inventory/:inventoryId",
  inventoryController.getIndividualInventory
);
router.post("/inventory/add-new", inventoryController.addNewInventory);

module.exports = router;
