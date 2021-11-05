const express = require('express')
const router = express.Router()
const { post } = require('../helpers/requests')

class Microservice {
    constructor(path, port, router) {
        this.router = router? router : undefined
        this.path = path
        this.port = port

        if(!this.router) {
            this.routerServiceProxy()
        }
    }

    generateUrl(path) {
        return 'http://localhost:' + this.port + path
    }

    routerServiceProxy() {
        var router = express.Router()
        router.use('/', async (req, res, next) => {
            try {
                var url = this.generateUrl(req.url)
                var authToken = req.headers.authorization
                let response = await post(authToken, url)
                res.status(200).send(response)
            } catch (error) {
                next(error)
            }
        })
        this.router = router
    }

}

// const sampleServiceRouter = require('./microservice-sample')
// const sampleService = new Microservice('/microservice-sample', 3002, sampleServiceRouter)

const sampleService = new Microservice('/microservice-sample', 3002)
router.use(sampleService.path, sampleService.router)

module.exports = router