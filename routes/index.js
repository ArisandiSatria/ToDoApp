const getUsers = require("../controllers/userController");
const todoRouter = require("./todoRoute");
const userRouter = require("./userRoute");

const router = require("express").Router();

router.get("/", getUsers.getAll);

router.use(userRouter);
router.use(todoRouter);

module.exports = router;
