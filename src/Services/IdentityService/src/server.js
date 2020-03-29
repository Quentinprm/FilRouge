const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static('client'));
router.set(app);

app.listen(config.port,() => console.log('Identity service listening on port:'+ config.port));