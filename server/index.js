require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/routes.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

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
