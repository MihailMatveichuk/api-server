const Router = require('express');
const router = Router();

const controller = require('../controllers/typeController');

router.get('/', controller.getTypes);

router.post('/', controller.createType);

module.exports = router;
