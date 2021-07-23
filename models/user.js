/**
 * User Model
 */
 const mongoose = require('mongoose')

 const userSchema = new mongoose.Schema({
    // nothing here yet
 })

 module.exports = mongoose.model('User', userSchema)