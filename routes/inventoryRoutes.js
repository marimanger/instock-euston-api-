const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const inventoryController = require("../controllers/inventoryCon");

// examples
router.get("/inventory", inventoryController.getAllData);
router.get("/inventorypage",inventoryController.getSomeData)

router.get(
  "/inventory/:inventoryId",
  inventoryController.getIndividualInventory
);
router.post("/warehouseq  a``/add-new", warehouseController.addNewWarehouse);

module.exports = router;
