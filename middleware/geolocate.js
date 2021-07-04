const fetch = require('node-fetch')

let ip = '113.146.89.33'

const getIP = async function (req, res, next) {
 
    try{
        if (req.connection.remoteAddress !== '::1') {
            console.log(`setting ip to ${req.connection.remoteAddress}`)
            ip = req.connection.remoteAddress
        }
        console.log('fetching from ip-api.com...')
        const response = await fetch(`http://ip-api.com/json/${ip}`)
        const json = await response.json()
        if (json) {
            console.log(`Response from ip-api: ${json}`)
            req.geo = {data: json}
        }

    } catch (err) {
        console.log(`${err.name}: ${err.message}`)
    }
    next()
}
module.exports = getIP