const taskCtrl = require('../../controllers/tasks')
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
        const data = taskCtrl.getAllTasks()
        res.send(data)
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

router.route('/company/:id')
    .get((req, res) => {
       res.send(taskCtrl.getAllTasksFromCompanyID(req.params.id))
    })

module.exports = router