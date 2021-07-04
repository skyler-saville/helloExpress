/**
 * Tasks Controllers
 */

 const express = require('express')

 function getAllTasks() {
     return (`getAllTasks not yet implemented`)
 }
 
 function createNewTask() {
     return (`createNewTask not yet implemented`)
 }
 
 /**
  *  id = req.me, which is set via middleware on Tasks router
  *  pulled from the JWT stored in a cookie
  * 
  */ 
 function getCurrentTask(id) {
     if (!id){
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`getCurrentTask not yet implemented`)
         
     }
     // use the id to query the database and find the one Task
     console.log(`id of ${id}`)
     return (`getCurrentTask = ${id}`)
 }
 
 function updateCurrentTask(id) {
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`updateCurrentTask not yet implemented`)
     }
     // use the id to query the database and find the one Task
     console.log(`id of ${id}`)
     return (`updateCurrentTask = ${id}`)
 }
 
 function removeCurrentTask (id){
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`removeCurrentTask not yet implemented`)
     }
     // use the id to query the database and find the one Task
     console.log(`id of ${id}`)
     return (`removeCurrentTask = ${id}`)
 }
 
 function getAllTasksFromCompanyID(id) {
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`getAllTasksFromCompanyID not yet implemented`)
     }
     // use the id to query the database and find all Tasks belonging to that company
     console.log(`id of ${id}`)
     return (`getAllTasksFromCompanyID = ${id}`)
 }
 
 module.exports = {
     getAllTasks,
     createNewTask,
     getCurrentTask,
     updateCurrentTask,
     removeCurrentTask,
     getAllTasksFromCompanyID
 }