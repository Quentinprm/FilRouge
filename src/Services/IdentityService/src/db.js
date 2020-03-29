const config = require('./config');
const Sequelize = require('sequelize');

var sequelize = new Sequelize(config.dbName,config.dbUser,config.dbPassword,{
    host: config.dbAdress,
    dialect: config.dbType
})//new Sequelize(config.dbConnectionString);
//require('sequelize-values')(sequelize);

module.exports = sequelize;