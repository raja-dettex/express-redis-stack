const { Client } = require('redis-om');
const {redisURL}= require('./../constants/constants.js');
const { Logger } = require('./../middlewares/Logger.js')
 
const client = new Client();
const logger = new Logger();

async function startClient(client) {
    await client.open(redisURL);
}




module.exports = { startClient, client}