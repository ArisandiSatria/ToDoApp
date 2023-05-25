const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const userRouter = require("express").Router();

userRouter.get("/users", authMiddleware, userController.getAll);
userRouter.post("/users/register", userController.addUser);
userRouter.post("/users/login", userController.loginUser);

module.exports = userRouter;
