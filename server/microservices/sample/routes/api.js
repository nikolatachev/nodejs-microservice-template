const envext = process.env.NODE_ENV ? "." +  process.env.NODE_ENV : ""
require('dotenv').config({path:"./.env" + envext})

var express = require('express')
var router = express.Router()

router.use('/', function(req, res, next) {
    res.status(200).send("Sample microservice connected")
})

module.exports = router
