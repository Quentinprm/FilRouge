const sequelize = require('../db');
const Users = require('../models/model').User;

const addUser = user => Users.create(user);
const getUserByLogin = login => Users.findOne({where: {login}});

module.exports = {
	addUser,
	getUserByLogin
}