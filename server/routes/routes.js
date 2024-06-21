const Router = require('express');
const router = Router();

router.use('/users', require('./usersRoute'));
router.use('/brands', require('./brandRoute'));
router.use('/types', require('./typeRoute'));
router.use('/devices', require('./deviceRoute'));

module.exports = router;
