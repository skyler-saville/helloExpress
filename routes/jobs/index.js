const jobCtrl = require('../../controllers/jobs')
const express = require('express')
const router = express.Router()

//middleware that is specific to this router
router.use(function setUserID(req, res, next) {
    // use the JWT cookie, if available, to get the current users id
    // only use the id in the JWT, even if there is more data in the JWT
    req.me = 's0meRand0mStr1ng'
    next()
})


router.route('/')
    .get((req, res) => {
        const data = jobCtrl.getAllJobs()
        res.send(data)
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

router.route('/company/:id')
    .get((req, res) => {
       res.send(jobCtrl.getAllJobsFromCompanyID(req.params.id))
    })

module.exports = router
