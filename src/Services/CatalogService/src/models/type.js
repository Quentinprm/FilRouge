const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const TypeSchema = new Schema({
    name: {type: String, required: true},
});

const Type = Model('Type',TypeSchema);
module.exports = Type;