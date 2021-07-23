const usersCtrl = require('../controllers/users')
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')


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
        const data = usersCtrl.getAllUsers()
        res.send(data)
    })

router.route('/company') // get all users from current users company
    .get((req, res) => {
       res.send(usersCtrl.getAllUsersFromCompanyID(req.me))
    })

router.route('/register')
    .post((req, res) => {
        res.send(usersCtrl.registerNewUser())
    })

router.route('/current') // changed from 'me' to 'current' 
    .get((req, res) => {
        res.send(usersCtrl.getCurrentUser(req.me))
    })   
    .patch((req, res) => { // PATCH IS A PARTIAL CHANGE ... PUT WOULD REQUIRE ALL FIELDS TO BE RESENT
       res.send(usersCtrl.updateCurrentUser(req.me))
    })
    .delete((req, res) => { // allow user to delete their account
      res.send(usersCtrl.removeCurrentUser(req.me))
    })



module.exports = router