const express = require("express")
const app = express()
const cors = require("cors")
app.use (cors())
app.use (express.json())
const MongoClient = require ("mongodb").MongoClient

const createRouter = require("./helpers/create_router.js")

MongoClient.connect("mongodb://127.0.0.1:27017", {useUnifiedTopology: true})
.then((client) =>{
    const db = client.db("star_wars")
    const enemyCollection=db.collection("enemies")
    const enemyRouter=createRouter(enemyCollection)
    app.use("/api/enemies",enemyRouter)
    const inventoryCollection=db.collection("inventory")
    const inventoryRouter=createRouter(inventoryCollection)
    app.use("/api/inventory",inventoryRouter)
    const logCollection=db.collection("log")
    const logRouter=createRouter(logCollection)
    app.use("/api/log",logRouter)
    const bountyHunterCollection=db.collection("bounty_hunters")
    const bountyHunterRouter=createRouter(bountyHunterCollection)
    app.use("/api/bountyHunters",bountyHunterRouter)
    const storeCollection=db.collection("store")
    const storeRouter=createRouter(storeCollection)
    app.use("/api/store",storeRouter)
    const partyCollection=db.collection("party")
    const partyRouter=createRouter(partyCollection)
    app.use("/api/party",partyRouter)

})
.catch (console.error)

app.listen(9000, function (){
    console.log(`Listening on port ${this.address().port}`)
})