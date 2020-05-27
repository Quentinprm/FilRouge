/* Quentin Parmentier  */
var express = require('express');
var app = express();
var router = require('./routers/router');
var bodyParser = require('body-parser');
const config = require('./config');
var cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send("Client API Gateway")
})

app.use(router)

app.listen(config.port,() => console.log('Catalog service listening on port:'+ config.port));