const bcryptHelper = require("../helper/bcryptHelper");
const jwtHelper = require("../helper/jwtHelper");
const validateEmail = require("../helper/validation/emailHelper");
const { Users } = require("../models/index");

const userController = {
  getAll: async (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          message: "User tidak ada!",
        });
      }

      const users = await Users.findAll();
      return res.json({ status: 200, message: "", users });
    } catch (error) {
      console.log("error:", error);
    }
  },
  addUser: async (req, res, next) => {
    try {
      // const users = await Users.create();

      // get all data body
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(404).json({
          message: "Tolong isi semua input!",
        });
      }

      if (!validateEmail(email)) {
        return res.status(404).json({
          message: "Email tidak valid!",
        });
      }

      const isUser = await Users.findOne({
        where: { email: email },
      });

      if (isUser) {
        return res.status(404).json({
          message: "Email sudah terdaftar!",
        });
      }

      const newPassword = await bcryptHelper.encrypt(password);

      const user = await Users.create({
        name,
        email,
        password: newPassword,
      });

      console.log(newPassword);
      return res.json({
        status: 202,
        message: "Akun berhasil dibuat",
        data: user,
      });
    } catch (error) {
      console.log("error:", error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(404).json({
          message: "Tolong isi semua input!",
        });
      }

      if (!validateEmail(email)) {
        return res.status(404).json({
          message: "Email tidak valid!",
        });
      }

      const isUser = await Users.findOne({
        where: { email: email },
      });

      if (!isUser) {
        return res.status(404).json({
          message: "Akun anda belum terdaftar!",
        });
      }

      const comparePassword = await bcryptHelper.compare(
        password,
        isUser.password
      );

      if (!comparePassword) {
        return res.status(404).json({
          message: "Password salah!",
        });
      }

      const token = jwtHelper.signIn({
        id: isUser.id,
      });

      return res.status(200).json({
        message: "Berhasil Login!",
        token,
      });
    } catch (error) {}
  },
};

module.exports = userController;
