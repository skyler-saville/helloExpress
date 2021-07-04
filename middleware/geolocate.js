const fetch = require('node-fetch')

const random_ip = [
                    '24.76.44.172','174.69.182.202',
                    '83.85.164.109','202.134.42.112',
                    '123.205.18.180','252.247.218.97',
                    '109.115.64.49','102.148.141.36', 
                    '168.100.241.38','113.146.89.33'
                ]
let ip = random_ip[Math.floor(Math.random()*random_ip.length)] // default for when using localhost
let info
const getIP = async function (req, res, next) {
 
    try{
        if (req.connection.remoteAddress !== '::1') {
            console.log(`setting ip to ${req.connection.remoteAddress}`)
            ip = req.connection.remoteAddress
        }
        console.log('fetching from ip-api.com...')
        fetch(`http://ip-api.com/json/${ip}`)
            .then(res=>res.json())
            .then(json => info = json)
            if (info ) {
                req.geo = 'set'
                req.geo.info = info
    
            }
    } catch (err) {
        console.log(`${err.name}: ${err.message}`)
    }

    next()

}
module.exports = getIP