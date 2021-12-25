require("dotenv").config()
const express = require("express")
const http = require("http")
const router = require("./src/route")


const app = express()

app.use(express.json())
app.use("/api/v1", router)


const port = 4000
http.createServer(app).listen(port, ()=>{
    console.log("server running on 127.0.0.1:"+port)
})