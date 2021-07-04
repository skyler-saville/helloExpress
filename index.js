const express = require('express')

const app = express()
// disable the default Express header
app.disable('x-powered-by')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 8080

// add external router files
const timelog = require('./routes/timelog')
const users = require('./routes/users/')
const projects = require('./routes/projects/')
const jobs = require('./routes/jobs/')
const tasks = require('./routes/tasks/')


// add middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json()) // used instead of body-parser package
app.use(express.urlencoded({ extended: true })) // used instead of body-parser package



// routes
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Hello Express!')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About testing ExpressJS')
})

// use external router files
app.use('/timelog', timelog)
app.use('/users', users)
app.use('/projects', projects)
app.use('/jobs', jobs)
app.use('/tasks', tasks)


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
