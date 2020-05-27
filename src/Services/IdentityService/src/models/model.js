/* Quentin Parmentier  */
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model{}
User.init({
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'user'
})

module.exports = {
    User
}