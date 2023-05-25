const { Todo } = require("../models/index");

const todoController = {
  getAll: async (req, res) => {
    try {
      const { id } = req.user;

      const todos = await Todo.findAll({
        where: { user_id: id },
      });

      return res.status(200).json({
        message: "Data berhasil ditampilkan!",
        data: todos,
      });
    } catch (error) {
      console.log(error);
    }
  },
  addTodo: async (req, res) => {
    try {
      const { id } = req.user;

      const { name, description } = req.body;

      const todo = await Todo.create({
        name,
        description,
        status: "Todo",
        user_id: id,
      });

      return res.status(201).json({
        message: "Data berhasil ditambahkan!",
        data: todo,
      });
    } catch (error) {
      console.log(error);
    }
  },
  detailTodo: async (req, res) => {
    try {
      const idParams = req.params.id;
      const { id } = req.user;

      const todo = await Todo.findOne({
        where: { id: idParams, user_id: id },
      });

      if (!todo) {
        return res.status(404).json({
          message: "Data tidak ditemukan!",
        });
      }

      return res.status(200).json({
        message: "Data berhasil ditampilkan!",
        data: todo,
      });
    } catch (error) {
      console.log(error);
    }
  },
  editTodo: async (req, res) => {
    try {
      const { name, description, status } = req.body;
      const idParams = req.params.id;
      const { id } = req.user;

      const todo = await Todo.findOne({
        where: { id: idParams, user_id: id },
      });

      if (!todo) {
        return res.status(404).json({
          message: "Data tidak ditemukan!",
        });
      }

      await Todo.update(
        {
          name,
          description,
          status,
        },
        {
          where: {
            id: idParams,
          },
        }
      );

      return res.status(201).json({
        message: "Data berhasil diubah!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const idParams = req.params.id;
      const { id } = req.user;

      const todo = await Todo.findOne({
        where: { id: idParams, user_id: id },
      });

      if (!todo) {
        return res.status(404).json({
          message: "Data tidak ditemukan!",
        });
      }

      await Todo.destroy({
        where: { id: idParams },
      });

      return res.status(201).json({
        message: "Data berhasil dihapus!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteAllTodo: async (req, res) => {
    try {
      const { id } = req.user;

      await Todo.destroy({
        where: { user_id: id },
      });

      return res.status(201).json({
        message: "Semua data berhasil dihapus!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = todoController;
