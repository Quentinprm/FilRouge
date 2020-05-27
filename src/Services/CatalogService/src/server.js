/* Quentin Parmentier  */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');
var mongoose = require('mongoose');
const schedule = require('node-schedule');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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