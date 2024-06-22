const Router = require('express');
const router = Router();

const controller = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/auth', authMiddleware, controller.auth);

router.post('/registration', controller.registration);

router.post('/login', controller.login);

module.exports = router;
