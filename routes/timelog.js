const express = require('express')
const router = express.Router()
const getIP = require('../middleware/geolocate')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    const now = new Date()
    req.time = now
    console.log(`Time middleware: ${now.toUTCString()}`)
    next()
})

// define home route
router.get('/', getIP, (req, res) => {
    if (req.geo) {
        console.log('the ip is set')
        const payload = {
            time: req.time.toUTCString(),
            ip_info: req.geo
        }
        res.send(payload)
    } else {
        res.send('Timelog home page')
    }
    

})

router.get('/about', (req, res) => {
    res.send('About the Timelog')
})

module.exports = router