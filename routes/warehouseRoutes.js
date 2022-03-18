const router = require("express").Router();
const fs = require("fs");
const warehouseController = require("../controllers/warehouseCon");




// examples
router.get("/warehouse", warehouseController.getAllData);
router.get("/warehouse/:id", warehouseController.getIndividual)
router.post("/warehouse/add-new", warehouseController.addNewWarehouse);

// router.get("/products/:productId", productsController.getIndividual);

module.exports = router;
