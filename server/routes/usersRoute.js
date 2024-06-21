const Router = require('express');
const router = Router();

const controller = require('../controllers/userController');

router.get('/auth', controller.auth);

router.post('/registration', controller.registration);

router.post('/login', controller.login);

module.exports = router;
