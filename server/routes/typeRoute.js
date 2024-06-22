const Router = require('express');
const router = Router();

const controller = require('../controllers/typeController');

router.get('/', controller.getTypes);

router.post('/', controller.createType);

router.delete('/', controller.deleteType);

module.exports = router;
