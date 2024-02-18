const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uuid = require('node-uuid');

const init = function init(mongoose){
    const orderItemSchema = new Schema({
        orderItemId : {
            type : String,
            default : uuid.v1
        },
        orderId: {
            type: String
        },
        name: String,
        subTotal: Number,
        description: String,
        category: String,
        image: String,
        inventory: Number,
        quantity : Number,
        referencedItemId : Number,
        orderDate: {
            type: Date,
            default: Date.now
        }
    });
    // Create a model based on the schema
    const OrderItem = mongoose.model('OrderItem', orderItemSchema);

    return OrderItem
}

module.exports = init
