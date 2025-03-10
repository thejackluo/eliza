const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a new Sequelize instance with DB connection details from environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  dialectOptions: process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {},
});

module.exports = sequelize;
