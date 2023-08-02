const { Entity, Schema} = require("redis-om");
const {client, startClient} = require('./../client.js');
const { Logger } = require('./../../middlewares/Logger.js')
const logger = new Logger();
const EventEmitter = require('events');

const emitter = new EventEmitter();

let userRepository = null;

function openConnection() {
    startClient(client).then(()=> {
        logger.info("connection is open");
        emitter.emit("connection open");
    }).catch((e)=> {
        logger.error(e.message);
        emitter.emit("connection error");
    });
}

openConnection();



class User{} 
 
const userEntity = User && Entity;


const userSchema = new Schema(User, {
    username: {type: 'string'},
    email: { type: 'string' },
    createdAt: { type: 'date' },
    updatedAt: { type: 'date'}
});



emitter.on('connection open', async ()=> {
    logger.info("listening to connection is open");
    userRepository =  client.fetchRepository(userSchema);
    await userRepository.createIndex();
    logger.info("repo is fetched");
})


emitter.on('connection error', ()=> {
    setTimeout(()=> {
        openConnection();
    }, 3000)
})

// async function  createIndex() {
//     await userRepository.createIndex();
// }
// createIndex();

module.exports = { userRepository };