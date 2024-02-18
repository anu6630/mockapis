const AppDbClient = require("../AppDBclient")


async function appInit(){
    require('dotenv').config()
    console.log("Envs initialized ", process.env)
    
    const dbClient = new AppDbClient(process.env.MONGO_CONNECTION_STRING)
    dbClient.connect()


}

module.exports = {
    appInit
}

