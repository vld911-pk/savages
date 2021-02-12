const { Router } = require("express");
const userController = require("../controllers/userController");
const { check } = require("express-validator");
const userRouter = Router();

const authMiddleware = require("../middleware/auth");

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
userRouter.put(
  "/users/:id",
  [
    check("name","Name should be more than 5 letters").isLength({min : 5}),
    check("surname", "Surname should be more than 5 letters").isLength({ min: 5 }),
    check("email", "Put correct email").isEmail(),
    check("continent", "All u had to do, that's choose the fucking options, not even write it man"),
  ],
  userController.updateUserData
);

userRouter.post("/refresh-tokens", userController.refreshTokens);

module.exports = userRouter;
