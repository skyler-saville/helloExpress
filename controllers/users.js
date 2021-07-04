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
function getCurrentUser(id) {
    if (!id){
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`getCurrentUser not yet implemented`)
        
    }
    // use the id to query the database and find the one user
    console.log(`id of ${id}`)
    return (`getCurrentUser = ${id}`)
}

function updateCurrentUser(id) {
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`updateCurrentUser not yet implemented`)
    }
    // use the id to query the database and find the one user
    console.log(`id of ${id}`)
    return (`updateCurrentUser = ${id}`)
}

function removeCurrentUser (id){
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`removeCurrentUser not yet implemented`)
    }
    // use the id to query the database and find the one user
    console.log(`id of ${id}`)
    return (`removeCurrentUser = ${id}`)
}

function getAllUsersFromCompanyID(id) {
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`getAllUsersFromCompanyID not yet implemented`)
    }
    // use the id to query the database and find all users belonging to that company
    console.log(`id of ${id}`)
    return (`getAllUsersFromCompanyID = ${id}`)
}

module.exports = {
    getAllUsers,
    registerNewUser,
    getCurrentUser,
    updateCurrentUser,
    removeCurrentUser,
    getAllUsersFromCompanyID
}