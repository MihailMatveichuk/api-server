const ApiError = require('../error/ApiError');
const models = require('../models/models');

class BrandController {
  getBrands = async (req, res) => {
    try {
      const brands = await models.Brand.findAll();
      res.status(200).json({
        brands: brands,
        message: 'All brands',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  createBrand = async (req, res) => {
    try {
      const { name } = req.body;
      const brand = await models.Brand.create({ name });
      res.status(200).json({
        brand: brand,
        message: 'brand created',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  deleteBrand = async (req, res, next) => {
    const { id } = req.query;
    const brand = await models.Brand.findOne({ where: { id: id } });

    if (!brand) {
      return next(ApiError.badRequest('Brand not found'));
    }

    try {
      await models.Brand.destroy({ where: { id } });

      res.status(200).json({ message: `Brand was successfully deleted` });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  };
}

module.exports = new BrandController();
