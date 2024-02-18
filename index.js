
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
const appInitModule = require("./infra/boot/Appstartup")

initModules();
expressUses();

app.listen(port, async () => {
    console.log(`Server is listening at http://localhost:${port}`);
})



function expressUses(){
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Routes
    const ecommeRoutes = require("./routes/ecomm.routes");
    app.use("/api", ecommeRoutes) 

}

function initModules(){
    (async () => {
        appInitModule.appInit()
    })();
}

