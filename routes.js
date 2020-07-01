const express = require('express');
const routes = express.Router();


// routes.get('/', function (req, res) {
//     return res.send("It's working")
// })

routes.get('/', function (req, res) {
    return res.render('index')
})

routes.get('/test', function (req, res) {
    return res.render('index-test')
})


module.exports = routes;