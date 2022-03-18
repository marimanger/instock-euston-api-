const router = require("express").Router();
const fs = require("fs");
const warehouseController = require("../controllers/warehouseCon");

router.get("/warehouses", warehouseController.getAllData);
router.post("/warehouse/add-new", warehouseController.addNewWarehouse);

// router.get("/products/:productId", productsController.getIndividual);

module.exports = router;
