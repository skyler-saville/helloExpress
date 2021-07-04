/**
 * Jobs Controllers
 */

 const express = require('express')

 function getAllJobs() {
     return (`getAllJobs not yet implemented`)
 }
 
 function createNewJob() {
     return (`createNewJob not yet implemented`)
 }
 
 /**
  *  id = req.me, which is set via middleware on Jobs router
  *  pulled from the JWT stored in a cookie
  * 
  */ 
 function getCurrentJob(id) {
     if (!id){
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`getCurrentJob not yet implemented`)
         
     }
     // use the id to query the database and find the one Job
     console.log(`id of ${id}`)
     return (`getCurrentJob = ${id}`)
 }
 
 function updateCurrentJob(id) {
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`updateCurrentJob not yet implemented`)
     }
     // use the id to query the database and find the one Job
     console.log(`id of ${id}`)
     return (`updateCurrentJob = ${id}`)
 }
 
 function removeCurrentJob (id){
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`removeCurrentJob not yet implemented`)
     }
     // use the id to query the database and find the one Job
     console.log(`id of ${id}`)
     return (`removeCurrentJob = ${id}`)
 }
 
 function getAllJobsFromCompanyID(id) {
     if (!id) {
         console.log(`id of ${id} may not have been passed in correctly`)
         return (`getAllJobsFromCompanyID not yet implemented`)
     }
     // use the id to query the database and find all Jobs belonging to that company
     console.log(`id of ${id}`)
     return (`getAllJobsFromCompanyID = ${id}`)
 }
 
 module.exports = {
     getAllJobs,
     createNewJob,
     getCurrentJob,
     updateCurrentJob,
     removeCurrentJob,
     getAllJobsFromCompanyID
 }