const express = require("express");
const router = express.Router();


//Product routes
const inventoryController = require("../controllers/inventory/inventory.controller")

router.get("/inventory", inventoryController.inventoryController);
router.post("/inventory", inventoryController.saveProductController);
router.get("/lookup", inventoryController.searchProductController);
router.get("/products/all", inventoryController.getAllProducts);
router.get("/products", inventoryController.getById);



//Order routes

const orderController = require("../controllers/order/orders.controller")

router.get("/order", orderController.getOrderController);
router.post("/order", orderController.captureOrderController);



module.exports=router;