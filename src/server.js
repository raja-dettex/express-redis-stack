const express = require('express');
const {  port }  =  require('./constants/constants.js')
const { Logger }  = require('./middlewares/Logger.js')
const  { router } = require('./routers/users.router.js')
const swaggerUi = require('swagger-ui-express');
swaggerDoc = require('../swagger.json');
const app = express();
const logger = new Logger();


app.use(express.json());
app.get("/welcome", (req,res)=> {
    logger.info(`HTTP/1.1   ${req.method}  ${req.path} `);
    res.send("welcome")
});

app.use('/users',  router);
app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, (err)=> {
    if(err) logger.error(err);
    logger.info("app listening to port : " + port);
})