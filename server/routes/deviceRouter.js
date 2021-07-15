const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole, deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.put('/', deviceController.update);
router.delete('/:id', deviceController.delete);

module.exports = router