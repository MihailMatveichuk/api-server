const models = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  getTypes = async (req, res) => {
    try {
      const types = await models.Type.findAll();
      res.status(200).json(types);
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  };

  createType = async (req, res) => {
    try {
      const { name } = req.body;
      const type = await models.Type.create({ name });
      res.status(200).json(type);
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  };

  deleteType = async (req, res, next) => {
    const { id } = req.query;
    const type = await models.Type.findOne({ where: { id: id } });

    if (!type) {
      return next(ApiError.badRequest('Type not found'));
    }

    try {
      await models.Type.destroy({ where: { id } });
      res.status(200).json({ message: `Type was successfully deleted` });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  };
}

module.exports = new TypeController();
