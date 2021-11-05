const express = require('express')
const router = express.Router()
const { post } = require('../helpers/requests')
const port = 3002

function generateUrl(path) {
    return 'http://localhost:' + port + path
}

router.use('/', async (req, res, next) => {
    try {
        var url = generateUrl(req.url)
        var authToken = req.headers.authorization
        let response = await post(authToken, url)
        res.status(200).send(response)
    } catch (error) {
        next(error)
    }
})

module.exports = router
