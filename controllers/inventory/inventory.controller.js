
const mongoose = require('mongoose');
const ModelRegistry = require("../../infra/boot/ModelRegistry")

const Product = ModelRegistry.Product

const productList = [
    {
      "id": "1",
      "name": "Product 1",
      "price": 10.99,
      "description": "Description for product 1",
      "category": "Category 1",
      "image": "https://i.postimg.cc/05XXtHmb/kate-skumen-PJRabku-H3-Q-unsplash.jpg",
      "inventory": 100,
      "brand" : "Nike",
    },
    {
      "id": "2",
      "name": "Product 2",
      "price": 20.49,
      "description": "Description for product 2",
      "category": "Category 1",
      "image": "https://i.postimg.cc/gjrWCXNR/faith-yarn-Wr0-Tp-Kqf26s-unsplash.jpg",
      "inventory": 150
    },
    {
      "id": "3",
      "name": "Product 3",
      "price": 15.99,
      "description": "Description for product 3",
      "category": "Category 2",
      "image": "https://i.postimg.cc/k5xKSDNx/beauty-woman-model-wear-stylish-260nw-546542380.webp",
      "inventory": 120
    },
    {
      "id": "4",
      "name": "Product 4",
      "price": 25.79,
      "description": "Description for product 4",
      "category": "Category 2",
      "image": "https://unsplash.com/photos/TB0Ao4CQRqc",
      "inventory": 200
    },
    {
      "id": "5",
      "name": "Product 5",
      "price": 8.99,
      "description": "Description for product 5",
      "category": "Category 3",
      "image": "https://unsplash.com/photos/MJPr6nOdppw",
      "inventory": 80
    },
    {
      "id": "6",
      "name": "Product 6",
      "price": 19.99,
      "description": "Description for product 6",
      "category": "Category 3",
      "image": "https://unsplash.com/photos/PFzy4N0_R3M",
      "inventory": 110
    },
    {
      "id": "7",
      "name": "Product 7",
      "price": 30.99,
      "description": "Description for product 7",
      "category": "Category 4",
      "image": "https://unsplash.com/photos/i5BY6W2ttts",
      "inventory": 170
    },
    {
      "id": "8",
      "name": "Product 8",
      "price": 12.49,
      "description": "Description for product 8",
      "category": "Category 4",
      "image": "image8.jpg",
      "inventory": 90
    },
    {
      "id": "9",
      "name": "Product 9",
      "price": 5.99,
      "description": "Description for product 9",
      "category": "Category 5",
      "image": "image9.jpg",
      "inventory": 60
    },
    {
      "id": "10",
      "name": "Product 10",
      "price": 35.99,
      "description": "Description for product 10",
      "category": "Category 5",
      "image": "image10.jpg",
      "inventory": 220
    },
    {
      "id": "11",
      "name": "Product 11",
      "price": 16.99,
      "description": "Description for product 11",
      "category": "Category 6",
      "image": "image11.jpg",
      "inventory": 130
    },
    {
      "id": "12",
      "name": "Product 12",
      "price": 22.49,
      "description": "Description for product 12",
      "category": "Category 6",
      "image": "image12.jpg",
      "inventory": 180
    },
    {
      "id": "13",
      "name": "Product 13",
      "price": 7.99,
      "description": "Description for product 13",
      "category": "Category 7",
      "image": "image13.jpg",
      "inventory": 70
    },
    {
      "id": "14",
      "name": "Product 14",
      "price": 28.99,
      "description": "Description for product 14",
      "category": "Category 7",
      "image": "image14.jpg",
      "inventory": 190
    },
    {
      "id": "15",
      "name": "Product 15",
      "price": 9.99,
      "description": "Description for product 15",
      "category": "Category 8",
      "image": "image15.jpg",
      "inventory": 100
    },
    {
      "id": "16",
      "name": "Product 16",
      "price": 31.49,
      "description": "Description for product 16",
      "category": "Category 8",
      "image": "image16.jpg",
      "inventory": 150
    },
    {
      "id": "17",
      "name": "Product 17",
      "price": 11.99,
      "description": "Description for product 17",
      "category": "Category 9",
      "image": "image17.jpg",
      "inventory": 120
    },
    {
      "id": "18",
      "name": "Product 18",
      "price": 24.79,
      "description": "Description for product 18",
      "category": "Category 9",
      "image": "image18.jpg",
      "inventory": 200
    },
    {
      "id": "19",
      "name": "Product 19",
      "price": 6.99,
      "description": "Description for product 19",
      "category": "Category 10",
      "image": "image19.jpg",
      "inventory": 80
    },
    {
      "id": "20",
      "name": "Product 20",
      "price": 34.99,
      "description": "Description for product 20",
      "category": "Category 10",
      "image": "image20.jpg",
      "inventory": 110
    }
  ]
 inventoryController = async (req, res) => {
    try {
      console.log("=========", Product)
      const productList = await Product.find({})
      res.status(200).send(productList);
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: "Could not load products, Retry later" });
    }
  };


const saveProductController = async (req, res) => {

    try {
        // Create a new product using the request body
        const product = new Product(req.body);
        // Save the product to the database
        await product.save();
        // Send a success response
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
};

module.exports = {
  saveProductController,
  inventoryController
};