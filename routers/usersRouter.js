const {Router} = require('express');
const userController = require('../controllers/userController'); 
const {check} = require('express-validator');
const userRouter = Router();

//GET
userRouter.get('/users',userController.getAllUsers);
userRouter.get('/users/:id',userController.getUserById);
userRouter.get('/continents',userController.getAllContinents);
//POST
userRouter.post('/register',[
    check('email','invalid email').isEmail(),
    check('password','invalid password').isLength({min : 5})
],userController.registerHandler);
userRouter.post('/login',[
    check('email','invalid email').isEmail(),
    check('password','invalid password').isLength({min : 5})
],userController.loginHandler);

 module.exports = userRouter;