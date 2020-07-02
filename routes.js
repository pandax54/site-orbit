const express = require('express');
const routes = express.Router();


// routes.get('/', function (req, res) {
//     return res.send("It's working")
// })

routes.get('/', function (req, res) {
    return res.render('index')
})

routes.get('/products', function (req, res) {
    return res.render('SG360/Products')
})

routes.get('/sga', function (req, res) {
    return res.render('SG360/SGA')
})
routes.get('/sgt', function (req, res) {
    return res.render('SG360/SGT')
})
routes.get('/sgo', function (req, res) {
    return res.render('SG360/SG0')
})


routes.get('/test', function (req, res) {
    return res.render('index-test')
})


module.exports = routes;