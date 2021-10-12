const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_app', 'root', 'admin123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
