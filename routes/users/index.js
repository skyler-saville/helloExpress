const usersCtrl = require('../../controllers/users')
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')


//middleware that is specific to this router
router.use(function setUserID(req, res, next) {
    // use the JWT cookie, if available, to get the current users id
    // only use the id in the JWT, even if there is more data in the JWT
    req.me = 's0meRand0mStr1ng'
    next()
})


router.route('/')
    .get((req, res) => {
        const data = usersCtrl.getAllUsers()
        res.send(data)
    })

router.route('/register')
    .post((req, res) => {
        res.send(usersCtrl.registerNewUser())
    })

router.route('/me')
    .get((req, res) => {
        res.send(usersCtrl.getCurrentUser(req.me))
    })   
    .patch((req, res) => {
       res.send(usersCtrl.updateCurrentUser(req.me))
    })
    .delete((req, res) => {
      res.send(usersCtrl.removeCurrentUser(req.me))
    })

router.route('/company/:id')
    .get((req, res) => {
       res.send(usersCtrl.getAllUsersFromCompanyID(req.params.id))
    })

module.exports = router