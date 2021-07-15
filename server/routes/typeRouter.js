const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware')



router.post('/', checkRole, typeController.create);
router.get('/', typeController.getAll);
router.get('/:id', typeController.getOne);
router.put('/', checkRole, typeController.update);
router.delete('/:id', checkRole, typeController.delete);


module.exports = router