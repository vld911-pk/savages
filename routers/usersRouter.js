const {Router} = require('express');
const userController = require('../controllers/userController'); 
const {check} = require('express-validator');
const userRouter = Router();

const jwtMiddleware = require('../middleware/auth');

//GET
userRouter.get('/users',jwtMiddleware,userController.getAllUsers);
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

userRouter.post('/refresh-tokens',userController.refreshTokens);

 module.exports = userRouter;