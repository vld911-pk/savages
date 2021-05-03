const { Router } = require("express");
const userController = require("../controllers/userController");
const { check } = require("express-validator");
const userRouter = Router();

const authMiddleware = require("../middleware/auth");

function logger (req,res,next){
  console.log('logger', req);
  next();
}
//test
userRouter.get("/test", authMiddleware, userController.getTest);
userRouter.post("/refresh", logger ,userController.refreshTokens);


//GET
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getUserById);
userRouter.get("/continents", userController.getAllContinents);

//POST
userRouter.post(
  "/register",
  [
    check("email", "invalid email").isEmail(),
    check("password", "invalid password").isLength({ min: 5 }),
  ],
  userController.registerHandler
);
userRouter.post(
  "/login",
  [
    check("email", "invalid email").isEmail(),
    check("password", "invalid password").isLength({ min: 5 }),
  ],
  userController.loginHandler
);

//PUT
userRouter.put(
  "/users/:id",
  //[
  //   check("name","Name should be more than 5 letters").isLength({min : 3 }),
  //   check("surname", "Surname should be more than 5 letters").isLength({ min: 3 }),
  //   check("email", "Put correct email").isEmail(),
  //   check("continent", "All u had to do, that's choose the fucking option, CJ"),
  // ],
  userController.updateUserData
);


module.exports = userRouter;
