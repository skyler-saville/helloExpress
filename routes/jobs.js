const jobCtrl = require('../controllers/jobs')
const express = require('express')
const router = express.Router()

//middleware that is specific to this router
router.use(function setUserID(req, res, next) {
    // Check for JWT cookie
    // if cookie exists, set req.me to users id
    // only use the id in the JWT, even if there is more data
    req.me = {
        id: '93pqwehiufjncqpwe9iufn', 
        companyId: 'dasp9iohkj4nrtfpas9difhn3'
    }
    next()
})

router.route('/') // use ADMIN middleware to protect route
    .get((req, res) => {
        const data = jobCtrl.getAllJobs()
        res.send(data)
    })

router.route('/company') // get jobs from users companyId
    .get((req, res) => {
       res.send(jobCtrl.getAllJobsFromCompanyID(req.me.companyId))
    })

router.route('/:id')
    .get((req, res) => {
        res.send(jobCtrl.getCurrentJob(req.params.id))
    })
    .post((req, res) => {
        res.send(jobCtrl.createNewJob()) // no id required to create new
    })   
    .patch((req, res) => {
       res.send(jobCtrl.updateCurrentJob(req.params.id))
    })
    .delete((req, res) => {
      res.send(jobCtrl.removeCurrentJob(req.params.id))
    })



module.exports = router
