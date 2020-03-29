const Product = require('./models/product');
const Type = require('./models/type');
const Fixtures = require('node-mongoose-fixtures');
const mongoose = require('mongoose');
function updateDB(){

    var ParreDoucheId = mongoose.Types.ObjectId();
    var ParoiId = mongoose.Types.ObjectId();
    var ChemineeId = mongoose.Types.ObjectId();

    Fixtures.reset();

    Fixtures({
        Type: [
            {
                _id : ParoiId,
                name: 'Paroi'
            },
            {
                _id: ParreDoucheId,
                name: 'Parre-douche'
            },
            {
                _id: ChemineeId,
                name: 'Cheminée'
            },
        ],
        Product: [
            {
                libe: 'Parre-douche blindé',
                desc: 'une parre-douch de 2m de large sur 2m de haut',
                price: 600,
                typeId: ParreDoucheId
            },
            {
                libe: 'Parre-douche fumé',
                desc: 'un parre-douche d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ParreDoucheId
            },
            {
                libe: 'Parre-douche transparent',
                desc: 'Paroi de douche de 1m de large sur 2m de haut',
                price: 160,
                typeId: ParreDoucheId
            },
            {
                libe: 'Parre-douche teinté',
                desc: 'Paroi de douche de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ParreDoucheId
            },
            {
                libe: 'Parre-douche',
                desc: 'Parre-douche de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ParreDoucheId
            },
            {
                libe: 'Paroi blindée',
                desc: 'une paroi de 2m de large sur 2m de haut',
                price: 600,
                typeId: ParoiId
            },
            {
                libe: 'Paroi fumée',
                desc: 'un paroi d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ParoiId
            },
            {
                libe: 'Paroi transparente',
                desc: 'Paroi de 1m de large sur 2m de haut',
                price: 160,
                typeId: ParoiId
            },
            {
                libe: 'Paroi tentée',
                desc: 'Paroi de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ParoiId
            },
            {
                libe: 'Paroi',
                desc: 'Paroi de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ParoiId
            },
            {
                libe: 'Cheminée blindée',
                desc: 'Cheminée de 2m de large sur 2m de haut',
                price: 600,
                typeId: ChemineeId
            },
            {
                libe: 'Cheminée fumée',
                desc: 'Cheminée d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ChemineeId
            },
            {
                libe: 'Cheminée transparente',
                desc: 'Cheminée de 1m de large sur 2m de haut',
                price: 160,
                typeId: ChemineeId
            },
            {
                libe: 'Cheminée tentée',
                desc: 'Cheminée de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ChemineeId
            },
            {
                libe: 'Cheminée',
                desc: 'Cheminée de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ChemineeId
            }
        ]
    },function(err,data){

    });
}
module.exports = {
    updateDB
}