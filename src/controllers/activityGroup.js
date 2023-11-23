const { Activity } = require('../models');

const getAllActivityGroups = async (req, res) => {
  try {
    const activityGroups = await Activity.findAll();
    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: activityGroups,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: activity,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createActivityGroup = async (req, res) => {
  try {
    const { title, email } = req.body;

    if (!title) {
      return res.status(400).json({
        status: 'Bad Request',
        message: 'title cannot be null',
        data: {},
      });
    }

    if (!email) {
      return res.status(400).json({
        status: 'Bad Request',
        message: 'email cannot be null',
        data: {},
      });
    }
    const activity = await Activity.create({ title, email });

    return res.status(201).json({
      status: 'Success',
      message: 'Success',
      data: activity,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateActivityGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        status: 'Bad Request',
        message: 'title cannot be null',
        data: {},
      });
    }

    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    activity.title = title;
    await activity.save();

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: activity,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteActivityGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({
        status: 'Not Found',
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    await activity.destroy();

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getAllActivityGroups,
  getActivityById,
  createActivityGroup,
  updateActivityGroup,
  deleteActivityGroup,
};
