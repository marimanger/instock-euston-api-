const router = require("express").Router();
const fs = require("fs");
const warehouseController = require("../controllers/warehouseCon");

// warehouse routes
router.get("/warehouse", warehouseController.getAllData);
router.get("/warehouse/:id", warehouseController.getIndividual);
router.post("/warehouse/add-new", warehouseController.addNewWarehouse);
router.put("/warehouse/:id/edit", warehouseController.editWarehouse);
router.delete("/warehouse/:id", warehouseController.deleteWarehouse);

module.exports = router;
