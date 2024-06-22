const ApiError = require('../error/ApiError');
const models = require('../models/models');

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      const user = await models.User.create({ email, password });
      res.status(200).json({
        user: user,
        message: 'User created',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await models.User.findOne({ where: { email, password } });
      res.status(200).json({
        user: user,
        message: 'User logged in',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  }

  async auth(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next(ApiError.internal('User cant found'));
    }
    try {
      const users = await models.User.findAll();
      res.status(200).json({
        users: users,
        message: 'All users',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  }
}

module.exports = new UserController();
