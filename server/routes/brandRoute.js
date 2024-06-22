const Router = require('express');
const router = Router();

const controller = require('../controllers/brandController');

router.get('/', controller.getBrands);

router.post('/', controller.createBrand);

router.delete('/', controller.deleteBrand);

module.exports = router;
