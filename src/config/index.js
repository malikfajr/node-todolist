/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

module.exports = {
  db: {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DBNAME || 'example',
  },
  port: process.env.PORT || 3030,
};
