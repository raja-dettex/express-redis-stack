const dotenv = require('dotenv');

dotenv.config();

const redisURL = process.env.REDIS_URI;
const port = process.env.PORT | 4000;

module.exports = { redisURL, port }