/* Quentin Parmentier  */
express = require('express');
var router = express.Router();
const apiAdapter = require('./apiAdapter')
const config = require('../config');
const BASE_URL=config.stockServiceAddr;
const api = apiAdapter(BASE_URL);
router.get('/:magasin/:id/Nombre',(req,res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data);
    })
});

router.put('/:magasin/:id/augmentation/:augmentation',(req,res)=>{
    api.put(req.path).then(resp => {
        res.send(resp.data);
    })
})

router.put('/:magasin/:id/augmentation/:diminution',(req,res)=>{
    api.put(req.path).then(resp => {
        res.send(resp.data);
    })
})


module.exports = router;