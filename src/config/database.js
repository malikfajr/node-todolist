const { Sequelize } = require('sequelize');
const config = require('./index').db;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
  pool: {
    max: 5,
    min: 2,
    idle: 10000,
  },
});

try {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    });
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}

module.exports = sequelize;
