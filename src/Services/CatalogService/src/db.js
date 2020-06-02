/* Quentin Parmentier  */
const Product = require('./models/product');
const Type = require('./models/type');
const Fixtures = require('node-mongoose-fixtures');
const mongoose = require('mongoose');
function updateDB(){

    var ParreDoucheId = mongoose.Types.ObjectId();
    var ParoiId = mongoose.Types.ObjectId();
    var ChemineeId = mongoose.Types.ObjectId();
    console.log("try init db");
    Fixtures.reset();

    Fixtures({
        Type: [
            {
                _id : ParoiId,
                name: 'Paroi',
                externalId: '1'
            },
            {
                _id: ParreDoucheId,
                name: 'Parre-douche',
                externalId: '2'
            },
            {
                _id: ChemineeId,
                name: 'Cheminée',
                externalId: '3'
            },
        ],
        Product: [
            {
                externalId: '1',
                libe: 'Parre-douche blindé',
                desc: 'une parre-douch de 2m de large sur 2m de haut',
                price: 600,
                typeId: ParreDoucheId
            },
            {
                externalId: '2',
                libe: 'Parre-douche fumé',
                desc: 'un parre-douche d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ParreDoucheId
            },
            {
                externalId: '3',
                libe: 'Parre-douche transparent',
                desc: 'Paroi de douche de 1m de large sur 2m de haut',
                price: 160,
                typeId: ParreDoucheId
            },
            {
                externalId: '4',
                libe: 'Parre-douche teinté',
                desc: 'Paroi de douche de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ParreDoucheId
            },
            {
                externalId: '5',
                libe: 'Parre-douche',
                desc: 'Parre-douche de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ParreDoucheId
            },
            {
                externalId: '6',
                libe: 'Paroi blindée',
                desc: 'une paroi de 2m de large sur 2m de haut',
                price: 600,
                typeId: ParoiId
            },
            {
                externalId: '7',
                libe: 'Paroi fumée',
                desc: 'un paroi d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ParoiId
            },
            {
                externalId: '8',
                libe: 'Paroi transparente',
                desc: 'Paroi de 1m de large sur 2m de haut',
                price: 160,
                typeId: ParoiId
            },
            {
                externalId: '9',
                libe: 'Paroi tentée',
                desc: 'Paroi de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ParoiId
            },
            {
                externalId: '10',
                libe: 'Paroi',
                desc: 'Paroi de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ParoiId
            },
            {
                externalId: '11',
                libe: 'Cheminée blindée',
                desc: 'Cheminée de 2m de large sur 2m de haut',
                price: 600,
                typeId: ChemineeId
            },
            {
                externalId: '12',
                libe: 'Cheminée fumée',
                desc: 'Cheminée d 1m 50 de large sur 2m de haut',
                price: 300,
                typeId: ChemineeId
            },
            {
                externalId: '13',
                libe: 'Cheminée transparente',
                desc: 'Cheminée de 1m de large sur 2m de haut',
                price: 160,
                typeId: ChemineeId
            },
            {
                externalId: '14',
                libe: 'Cheminée tentée',
                desc: 'Cheminée de 1m 20 de large sur 2m de haut',
                price: 180,
                typeId: ChemineeId
            },
            {
                externalId: '15',
                libe: 'Cheminée',
                desc: 'Cheminée de 1m30 de large sur 2m de haut',
                price: 240,
                typeId: ChemineeId
            }
        ]
    },function(err,data){
        console.log("error durring Catalog database init");
    });
}
module.exports = {
    updateDB
}