/**
 * Users Controllers
 */

const express = require('express')

function getAllUsers() {
    return (`getAllUsers not yet implemented`)
}

function registerNewUser() {
    return (`registerNewUser not yet implemented`)
}

/**
 *  id = req.me, which is set via middleware on users router
 *  pulled from the JWT stored in a cookie
 * 
 */ 
function getCurrentUser(user) {
    if (!user.id){
        console.log(`id of ${user} may not have been passed in correctly`)
        return (`getCurrentUser not yet implemented`)
        
    }
    // use the id to query the database and find the one user
    console.log(`id of ${user.id}`)
    // return JSON
    return ({currentUser : {
        id: `${user.id}`,
        companyId: `${user.companyId}`
    }})
}

function updateCurrentUser(user) {
    if (!user) {
        console.log(`id of ${user} may not have been passed in correctly`)
        return (`updateCurrentUser not yet implemented`)
    }
    // use the id to query the database and find the one user
    console.log(`id of ${user.id}`)
    return (`updateCurrentUser = ${user.id}`)
}

function removeCurrentUser (user){
    if (!user) {
        console.log(`id of ${user} may not have been passed in correctly`)
        return (`removeCurrentUser not yet implemented`)
    }
    // use the id to query the database and find the one user
    console.log(`id of ${user.currentUserid}`)
    return (`removeCurrentUser = ${user.id}`)
}

function getAllUsersFromCompanyID(user) {
    if (!user) {
        console.log(`id of ${user} may not have been passed in correctly`)
        return (`getAllUsersFromCompanyID not yet implemented`)
    }
    // use the id to query the database and find all users belonging to that company
    console.log(`id of ${user.id}`)
    return (`getAllUsersFromCompanyID = ${user.companyId}`)
}

module.exports = {
    getAllUsers,
    registerNewUser,
    getCurrentUser,
    updateCurrentUser,
    removeCurrentUser,
    getAllUsersFromCompanyID
}