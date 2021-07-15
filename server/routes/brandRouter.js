const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole, brandController.create);
router.get('/', brandController.getAll);
router.get('/:id', brandController.getOne);
router.put('/', checkRole, brandController.update);
router.delete('/:id', checkRole, brandController.delete);

module.exports = router