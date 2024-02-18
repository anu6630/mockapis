
const mongoose = require('mongoose');
const ProductModule = require("../../controllers/domain/dtos/Product")
const Product = ProductModule(mongoose)

const OrderModule = require("../../controllers/domain/dtos/Order")
const Order = OrderModule(mongoose)

const OrderItemModule = require("../../controllers/domain/dtos/OrderItem")
const OrderItem = OrderItemModule(mongoose)


module.exports = {
    Product,
    Order,
    OrderItem
}
