const config =  require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/user');
/* Quentin Parmentier  */
function register(req, res){
	var login = req.body.login;
	return userService.getUserByLogin(req.body.login || '')
	.then(exists => {

		if (exists){
			return res.send({
				success: false,
				message: 'Registration failed. User with this email already registered.'
			});
		}

		var user = {
			login: req.body.login,
			password: bcrypt.hashSync(req.body.password, config.saltRounds)
		}

		return userService.addUser(user)
		.then(() => res.send({success: true}));
	});
};

function login(req, res){
	return authService.authenticate(req.body)
	.then(tokens => {
		res.send({
			success: true,
			data: { tokens }
		});
	})
	.catch(err => {
		if (err.type === 'custom'){
			return res.send({
				success: false,
				message: err.message
			});
		}
		return res.send({
			success: false,
			message: 'Authentication failed. Unexpected Error.'
		});
	})
};

module.exports = {
	login,
	register
}