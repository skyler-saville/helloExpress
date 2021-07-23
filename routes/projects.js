const projectCtrl = require('../controllers/projects')
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
        const data = projectCtrl.getAllProjects()
        res.send(data)
    })

router.route('/company') // get projects from users companyId
    .get((req, res) => {
       res.send(projectCtrl.getAllProjectsFromCompanyID(req.me.companyId))
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



module.exports = router