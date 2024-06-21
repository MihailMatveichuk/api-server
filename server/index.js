require('dotenv').config();

const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
      console.log('Database connected');
    });
  } catch (error) {
    console.log('Unable to connect to the database');
    console.log(error);
  }
};

start();
