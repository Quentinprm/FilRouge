/* Quentin Parmentier  */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static('client'));
router.set(app);

app.listen(config.port,() => console.log('Stock service listening on port:'+ config.port));