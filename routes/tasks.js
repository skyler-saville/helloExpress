const taskCtrl = require('../controllers/tasks')
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
        const data = taskCtrl.getAllTasks()
        res.send(data)
    })

router.route('/company') // get all tasks from users companyId
    .get((req, res) => {
       res.send(taskCtrl.getAllTasksFromCompanyID(req.me.companyId))
    })

router.route('/:id')
    .get((req, res) => {
        res.send(taskCtrl.getCurrentTask(req.params.id))
    })
    .post((req, res) => {
        res.send(taskCtrl.createNewTask()) // no id required to create new
    })   
    .patch((req, res) => {
       res.send(taskCtrl.updateCurrentTask(req.params.id))
    })
    .delete((req, res) => {
      res.send(taskCtrl.removeCurrentTask(req.params.id))
    })



module.exports = router