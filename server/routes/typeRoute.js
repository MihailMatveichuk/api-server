const Router = require('express');
const router = Router();
const checkMiddlware = require('../middlewares/checkRoleMiddleware');

const controller = require('../controllers/typeController');

router.get('/', controller.getTypes);

router.post('/', checkMiddlware('ADMIN'), controller.createType);

router.delete('/', checkMiddlware('ADMIN'), controller.deleteType);

module.exports = router;
