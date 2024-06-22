const Router = require('express');
const router = Router();
const checkMiddlware = require('../middlewares/checkRoleMiddleware');

const controller = require('../controllers/deviceController');

router.get('/', controller.getDevices);

router.get('/:id', controller.getOneDevice);

router.post('/', checkMiddlware('ADMIN'), controller.createDevice);

router.put('/', checkMiddlware('ADMIN'), controller.updateDevice);

router.delete('/', checkMiddlware('ADMIN'), controller.deleteDevice);

module.exports = router;
