const { Device, DeviceInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class DeviceController {
  getDevices = async (req, res) => {
    let { brandId, typeId, limit = 9, page = 1 } = req.query;

    let offset = page * limit - limit;

    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }

    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }

    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }

    return res.json(devices);
  };

  getOneDevice = async (req, res) => {
    const { id } = req.params;

    console.log(id);
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });

    return res.status(200).json(device);
  };

  createDevice = async (req, res, next) => {
    try {
      const { name, price, brandId, typeId, info } = req.body;

      const file = req.files.img;
      const fileName = uuid.v4() + '.jpg';

      file.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info.JSON.parse(info);
        info.forEach((element) => {
          DeviceInfo.create({
            title: element.title,
            description: element.description,
            deviceId: device.id,
          });
        });
      }

      res.status(200).json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  };

  updateDevice = async (req, res) => {
    try {
      const { name, price, rating, img } = req.body;
      const Device = await Device.update(
        { name, price, rating, img },
        { where: { id: req.query.id } }
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
      const Device = await Device.destroy({
        where: { id: req.query.id },
      });
      res.status(200).json({
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
