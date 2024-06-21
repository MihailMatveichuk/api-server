const Router = require('express');
const router = Router();

const controller = require('../controllers/brandController');

router.get('/', controller.getBrands);

router.post('/', controller.createBrand);

module.exports = router;
