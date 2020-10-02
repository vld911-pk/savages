const {Router} = require('express');
const userController = require('../controllers/userController'); 
const userRouter = Router();

userRouter.get('/users',userController.getAllUsers);
userRouter.get('/users/:id',userController.getUserById);
userRouter.get('/hobbies',userController.getAllHobbies)

 module.exports = userRouter;