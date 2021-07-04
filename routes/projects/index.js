const projectCtrl = require('../../controllers/projects')
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
        const data = projectCtrl.getAllProjects()
        res.send(data)
    })

router.route('/:id')
    .get((req, res) => {
        res.send(projectCtrl.getCurrentProject(req.params.id))
    })
    .post((req, res) => {
        res.send(projectCtrl.createNewProject()) // no id required to create new
    })   
    .patch((req, res) => {
       res.send(projectCtrl.updateCurrentProject(req.params.id))
    })
    .delete((req, res) => {
      res.send(projectCtrl.removeCurrentProject(req.params.id))
    })

router.route('/company/:id')
    .get((req, res) => {
       res.send(projectCtrl.getAllProjectsFromCompanyID(req.params.id))
    })

module.exports = router