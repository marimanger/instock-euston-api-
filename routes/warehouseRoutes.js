const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const warehouseController = require("../controllers/warehouseCon");




// examples
router.get("/warehouse", warehouseController.getAllData);

// router.get("/products/:productId", productsController.getIndividual);

// router.post("/products/", productsController.createProduct);

module.exports = router;
