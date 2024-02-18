
const mongoose = require('mongoose');

const ModelRegistry = require("../../infra/boot/ModelRegistry")


const Order = ModelRegistry.Order
const OrderItem = ModelRegistry.OrderItem
const Product = ModelRegistry.Product


const getOrderController = async (req, res) => {
    try {
      const orders = await Order.find({})
      console.log("Rendering all orders = " , orders)
      res.status(200).send(orders);
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: "Could not load products, Retry later" });
    }
  };


const captureOrderController = async (req, res) => {
    try {
        const orderId =  new mongoose.Types.ObjectId();
        const productsInReq = req.body.products

        const commereceItems = await Promise.all(productsInReq.map(async (product) => {
            const productInDb = await Product.findOne({ id : product.id})

            if (productInDb.length === 0) {
                throw new Error(`Product with ID ${product.id} not found in database`);
            }

            console.log(`${productInDb} found, adding to order`);
            console.log(`${productInDb.name} added order total has changed`)
            return await createCommerceItem(productInDb, product.quantity, orderId)
        }));
         
        const orderTotal = commereceItems.map(citem => citem.subTotal).reduce((a, b) => a + b)
        console.log(`items = ${commereceItems} orderTotal =${orderTotal}\n`)

        const p_ids = commereceItems.map(product => 
            product._id );

        console.log(`product ids ------> ${p_ids}`)

        const order = new Order({_id : orderId, subTotal : orderTotal, products : p_ids});

        await order.save();
        res.status(201).json({ message: 'Order created successfully', order: order });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to capture order, try again'});
    }
};

async function createCommerceItem(product, quantity, orderId){
    console.log(`Creating commereceItem from product ${product}`)
    const { _id , ...orderItemData} = product;
    const orderItemTo =  OrderItem(orderItemData)
    orderItemTo.subTotal = quantity * product.price
    orderItemTo.orderId = orderId
    return await orderItemTo.save();
}

module.exports = {
    getOrderController,
    captureOrderController
};