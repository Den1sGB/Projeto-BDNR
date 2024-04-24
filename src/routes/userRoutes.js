const express = require('express');
const router = express.Router();

 const userController = require('../controllers/userController');

 router.get('/', userController.getAllUsers);
 router.post('/', userController.createUser);
 router.put('/:id', userController.updateUser);
 router.delete('/:id', userController.deleteUser);

 //Implementar a update ('/:id')
 //Implementar a delete ('/:id')

 module.exports = router;