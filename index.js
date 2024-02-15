var orm = require("orm");
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())


const userRoutes = require("./routes/ecomm.routes");

app.use("/api", userRoutes) 

app.listen(port, async () => {
    console.log(`Server is listening at http://localhost:${port}`);
})


