const express = require('express')

const app = express()

const port = process.env.PORT || 8080

// routes
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Hello Express')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About testing ExpressJS')
})

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - server error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port} ` +
    `press Ctrl-C to terminate.`
))
