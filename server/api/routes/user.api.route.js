const express = require('express');
const controller = require('../controllers/user.api.controller');

const router = express.Router();

router.get('/', controller.index);
router.post('/signin', controller.postSignIn);
router.post('/', controller.postSignUp);
router.get('/email', controller.getEmail);
router.get('/find/', controller.findUserByEmail);

router.post('/signinClient', controller.postSignInClient);
router.get('/checkAdmin/:id', controller.checkAdmin);
router.get('/:id', controller.getUser);

router.get('/:id/carts', controller.getCartsOfUser);
router.get('/:id/bills', controller.getBillsOfUser);

router.delete('/:id', controller.deleteUser);
router.get('/:id/adminPermission', controller.getAdminPermission);
router.put('/:id', controller.editUser);

module.exports = router;
