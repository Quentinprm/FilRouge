/* Quentin Parmentier  */
express = require('express');
var router = express.Router();
const apiAdapter = require('./apiAdapter')
const config = require('../config');
const BASE_URL=config.catalogServiceAddr; 
const api = apiAdapter(BASE_URL);
router.get('/catalog',(req,res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
});

router.get('/catalog/:id',(req,res)=>{
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.get('/type',(req,res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
});

router.get('/type/:id',(req,res)=>{
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
})

module.exports = router;