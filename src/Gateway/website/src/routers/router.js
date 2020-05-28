/* Quentin Parmentier  */
var express = require('express');
var router = express.Router()
var catalogRouter = require('./catalogService')
var stockRouter = require('./stockService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(catalogRouter)
router.use(stockRouter)

module.exports = router