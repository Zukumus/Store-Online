const Router = require('express');
const UserController = require('../controllers/userController');
const models = require('../models/models');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();


router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.auth);
router.put('/', userController.update);
router.delete('/delete/:id', userController.delete);


module.exports = router