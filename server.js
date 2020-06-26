const express = require('express');
const routes = require("./routes")

const server = express()

server.use(express.urlencoded({ extended: true })) // must be first otherwise it wont work!!!

server.use(express.static('public'))

server.use(routes)

server.set("view engine", "html")


server.listen(5000, function () {
    console.log("server is running")
})