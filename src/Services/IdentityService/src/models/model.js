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
/**const User = sequelize.define('utilisateur',{
    identifiant: Sequelize.STRING,
    mdp: Sequelize.STRING,
});**/

module.exports = {
    User
}