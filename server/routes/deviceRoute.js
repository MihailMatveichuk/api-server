const Router = require('express');
const router = Router();

const controller = require('../controllers/deviceController');

router.get('/', controller.getDevices);

router.post('/', controller.createDevice);

router.put('/:id', controller.updateDevice);

router.delete('/:id', controller.deleteDevice);

module.exports = router;
