const Users = require('../models/model').User;
const config =  require('../config');
const CustomError = require('../customError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticate = params => {
	return Users.findOne({
		where: {
			login: params.login
		},
		raw: true
	}).then(user => {
		if (!user)
			throw new CustomError('Authentication failed. User not found.');

		if (!bcrypt.compareSync(params.password || '', user.password))
			throw new CustomError('Authentication failed. Wrong password.');

		const payload = {
			login: user.login,
			id: user.id,
			time: new Date()
		};

        var tokens =
        {
            publicToken: jwt.sign(payload, config.jwtPublicSecret, {
                expiresIn: config.tokenExpireTime
            }),

            privateToken: jwt.sign(payload, config.jwtPrivateSecret, {
                expiresIn: config.tokenExpireTime
            }),
        }

		return tokens;
	});
}

module.exports = {
	authenticate
}