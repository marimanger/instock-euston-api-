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
// router.get("/products/:productId", productsController.getIndividual);

// router.post("/products/", productsController.createProduct);

module.exports = router;
