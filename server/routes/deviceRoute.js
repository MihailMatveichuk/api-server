const Router = require('express');
const router = Router();

const controller = require('../controllers/deviceController');

router.get('/', controller.getDevices);

router.get('/:id', controller.getOneDevice);

router.post('/', controller.createDevice);

router.put('/', controller.updateDevice);

router.delete('/', controller.deleteDevice);

module.exports = router;
