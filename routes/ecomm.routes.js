const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventory/inventory.controller")


router.get("/inventory", inventoryController.getAllInventory);



module.exports=router;