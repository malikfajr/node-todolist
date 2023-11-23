const { Todo } = require('../models');

const getAllTodos = async (req, res) => {
  const { activity_group_id } = req.query;

  const condition = {};
  if (activity_group_id) {
    condition.activity_group_id = activity_group_id;
  }
  try {
    const todos = await Todo.findAll({
      where: condition,
    });

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Todo with ID ${id} Not Found`,
        data: {},
      });
    }

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createTodo = async (req, res) => {
  const { activity_group_id, title } = req.body;

  if (!title) {
    return res.status(400).json({
      status: 'Bad Request',
      message: 'title cannot be null',
      data: {},
    });
  }

  if (!activity_group_id) {
    return res.status(400).json({
      status: 'Bad Request',
      message: 'activity_group_id cannot be null',
      data: {},
    });
  }

  try {
    const todo = await Todo.create({ activity_group_id, title });
    return res.status(201).json({
      status: 'Success',
      message: 'Success',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Todo with ID ${id} Not Found`,
        data: {},
      });
    }

    await todo.destroy({ force: true });

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, is_active } = req.body;

  try {
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Todo with ID ${id} Not Found`,
        data: {},
      });
    }

    if (title !== undefined) todo.title = title;
    if (is_active !== undefined) todo.is_active = is_active;

    await todo.save();

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
};
