const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uuid = require('node-uuid');

const init = function init(mongoose){
    const orderSchema = new Schema({
        orderId: {
            type: String,
            unique: true,
            default : uuid.v1
        },
        products: [{
            type: Schema.Types.ObjectId,
            ref: 'OrderItem'
        }],
        subTotal: Number,
        orderDate: {
            type: Date,
            default: Date.now
        }
    });


    
    // Create a model based on the schema
    const Order = mongoose.model('Order', orderSchema);

    return Order
}
module.exports = init