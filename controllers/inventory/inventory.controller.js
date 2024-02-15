
const productList = [
    {
      "id": "1",
      "title": "Product 1",
      "price": 10.99,
      "description": "Description for product 1",
      "category": "Category 1",
      "image": "image1.jpg",
      "inventory": 100
    },
    {
      "id": "2",
      "title": "Product 2",
      "price": 20.49,
      "description": "Description for product 2",
      "category": "Category 1",
      "image": "image2.jpg",
      "inventory": 150
    },
    {
      "id": "3",
      "title": "Product 3",
      "price": 15.99,
      "description": "Description for product 3",
      "category": "Category 2",
      "image": "image3.jpg",
      "inventory": 120
    },
    {
      "id": "4",
      "title": "Product 4",
      "price": 25.79,
      "description": "Description for product 4",
      "category": "Category 2",
      "image": "image4.jpg",
      "inventory": 200
    },
    {
      "id": "5",
      "title": "Product 5",
      "price": 8.99,
      "description": "Description for product 5",
      "category": "Category 3",
      "image": "image5.jpg",
      "inventory": 80
    },
    {
      "id": "6",
      "title": "Product 6",
      "price": 19.99,
      "description": "Description for product 6",
      "category": "Category 3",
      "image": "image6.jpg",
      "inventory": 110
    },
    {
      "id": "7",
      "title": "Product 7",
      "price": 30.99,
      "description": "Description for product 7",
      "category": "Category 4",
      "image": "image7.jpg",
      "inventory": 170
    },
    {
      "id": "8",
      "title": "Product 8",
      "price": 12.49,
      "description": "Description for product 8",
      "category": "Category 4",
      "image": "image8.jpg",
      "inventory": 90
    },
    {
      "id": "9",
      "title": "Product 9",
      "price": 5.99,
      "description": "Description for product 9",
      "category": "Category 5",
      "image": "image9.jpg",
      "inventory": 60
    },
    {
      "id": "10",
      "title": "Product 10",
      "price": 35.99,
      "description": "Description for product 10",
      "category": "Category 5",
      "image": "image10.jpg",
      "inventory": 220
    },
    {
      "id": "11",
      "title": "Product 11",
      "price": 16.99,
      "description": "Description for product 11",
      "category": "Category 6",
      "image": "image11.jpg",
      "inventory": 130
    },
    {
      "id": "12",
      "title": "Product 12",
      "price": 22.49,
      "description": "Description for product 12",
      "category": "Category 6",
      "image": "image12.jpg",
      "inventory": 180
    },
    {
      "id": "13",
      "title": "Product 13",
      "price": 7.99,
      "description": "Description for product 13",
      "category": "Category 7",
      "image": "image13.jpg",
      "inventory": 70
    },
    {
      "id": "14",
      "title": "Product 14",
      "price": 28.99,
      "description": "Description for product 14",
      "category": "Category 7",
      "image": "image14.jpg",
      "inventory": 190
    },
    {
      "id": "15",
      "title": "Product 15",
      "price": 9.99,
      "description": "Description for product 15",
      "category": "Category 8",
      "image": "image15.jpg",
      "inventory": 100
    },
    {
      "id": "16",
      "title": "Product 16",
      "price": 31.49,
      "description": "Description for product 16",
      "category": "Category 8",
      "image": "image16.jpg",
      "inventory": 150
    },
    {
      "id": "17",
      "title": "Product 17",
      "price": 11.99,
      "description": "Description for product 17",
      "category": "Category 9",
      "image": "image17.jpg",
      "inventory": 120
    },
    {
      "id": "18",
      "title": "Product 18",
      "price": 24.79,
      "description": "Description for product 18",
      "category": "Category 9",
      "image": "image18.jpg",
      "inventory": 200
    },
    {
      "id": "19",
      "title": "Product 19",
      "price": 6.99,
      "description": "Description for product 19",
      "category": "Category 10",
      "image": "image19.jpg",
      "inventory": 80
    },
    {
      "id": "20",
      "title": "Product 20",
      "price": 34.99,
      "description": "Description for product 20",
      "category": "Category 10",
      "image": "image20.jpg",
      "inventory": 110
    }
  ]

 inventoryController = async (req, res) => {
    try {
    
      res.status(201).send(productList);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };


  exports.getAllInventory = inventoryController 