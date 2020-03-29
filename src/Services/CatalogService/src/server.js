const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');
var mongoose = require('mongoose');
const schedule = require('node-schedule');
const app = express();


mongoose.connect(config.dbAdress,{
    useMongoClient: true
})


const db = require('./db');
db.updateDB();
schedule.scheduleJob('0 0 * * *',() => {
    db.updateDB();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static('client'));
router.set(app);

app.listen(config.port,() => console.log('Catalog service listening on port:'+ config.port));