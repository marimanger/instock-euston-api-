const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const warehouseController = require("../controllers/warehouseCon");

// examples
router.get("/warehouses", warehouseController.getAllData);
router.post("/warehouse/add-new", warehouseController.addNewWarehouse);

// router.get("/products/:productId", productsController.getIndividual);

module.exports = router;
