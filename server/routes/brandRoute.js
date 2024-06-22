const Router = require('express');
const router = Router();
const checkMiddlware = require('../middlewares/checkRoleMiddleware');

const controller = require('../controllers/brandController');

router.get('/', controller.getBrands);

router.post('/', checkMiddlware('ADMIN'), controller.createBrand);

router.delete('/', checkMiddlware('ADMIN'), controller.deleteBrand);

module.exports = router;
