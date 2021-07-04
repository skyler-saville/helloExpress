/**
 * Projects Controllers
 */

const express = require('express')

function getAllProjects() {
    return (`getAllProjects not yet implemented`)
}

function createNewProject() {
    return (`createNewProject not yet implemented`)
}

/**
 *  id = req.me, which is set via middleware on Projects router
 *  pulled from the JWT stored in a cookie
 * 
 */ 
function getCurrentProject(id) {
    if (!id){
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`getCurrentProject not yet implemented`)
        
    }
    // use the id to query the database and find the one Project
    console.log(`id of ${id}`)
    return (`getCurrentProject = ${id}`)
}

function updateCurrentProject(id) {
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`updateCurrentProject not yet implemented`)
    }
    // use the id to query the database and find the one Project
    console.log(`id of ${id}`)
    return (`updateCurrentProject = ${id}`)
}

function removeCurrentProject (id){
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`removeCurrentProject not yet implemented`)
    }
    // use the id to query the database and find the one Project
    console.log(`id of ${id}`)
    return (`removeCurrentProject = ${id}`)
}

function getAllProjectsFromCompanyID(id) {
    if (!id) {
        console.log(`id of ${id} may not have been passed in correctly`)
        return (`getAllProjectsFromCompanyID not yet implemented`)
    }
    // use the id to query the database and find all Projects belonging to that company
    console.log(`id of ${id}`)
    return (`getAllProjectsFromCompanyID = ${id}`)
}

module.exports = {
    getAllProjects,
    createNewProject,
    getCurrentProject,
    updateCurrentProject,
    removeCurrentProject,
    getAllProjectsFromCompanyID
}