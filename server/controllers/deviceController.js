const models = require('../models/models');

class DeviceController {
  getDevices = async (req, res) => {
    try {
      const devices = await models.Device.findAll();
      res.status(200).json({
        devices: devices,
        message: 'All devices',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  createDevice = async (req, res) => {
    try {
      const { name, price, rating, img } = req.body;
      const Device = await models.Device.create({ name, price, rating, img });
      res.status(200).json({
        device: Device,
        message: 'Device created',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  updateDevice = async (req, res) => {
    try {
      const { name, price, rating, img } = req.body;
      const Device = await models.Device.update(
        { name, price, rating, img },
        { where: { id: req.params.id } }
      );
      res.status(200).json({
        Device: Device,
        message: 'Device updated',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };

  deleteDevice = async (req, res) => {
    try {
      const Device = await models.Device.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json({
        device: Device,
        message: 'User deleted',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong',
        body: error,
      });
    }
  };
}

module.exports = new DeviceController();
