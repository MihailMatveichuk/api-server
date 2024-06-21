const models = require('../models/models');

class TypeController {
  getTypes = async (req, res) => {
    try {
      const types = await models.Type.findAll();
      res.status(200).json({
        types: types,
        message: 'All types',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  createType = async (req, res) => {
    try {
      const { name } = req.body;
      const Type = await models.Type.create({ name });
      res.status(200).json({
        Type: Type,
        message: 'Type created',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };
}

module.exports = new TypeController();
