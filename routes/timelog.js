const express = require('express')
const router = express.Router()


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    const now = new Date()
    req.time = now
    console.log(`Time middleware: ${now.toUTCString()}`)
    next()
})

// define home route
router.get('/', (req, res) => {
    if (req.time) {
        const payload = {
            time: req.time.toUTCString(),
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