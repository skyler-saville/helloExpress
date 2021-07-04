const express = require('express')
const router = express.Router()
const getIP = require('../middleware/geolocate')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    const now = new Date()
    console.log(`Time middleware: ${now.toUTCString()}`)
    next()
})

// define home route
router.get('/', getIP, (req, res) => {
    console.log(`req.userip: ${req.userip}`)
    res.send('Timelog home page')

})

router.get('/about', (req, res) => {
    res.send('About the Timelog')
})

module.exports = router