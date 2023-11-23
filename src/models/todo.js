const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Todo = db.define(
  'todo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    activity_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high', 'very-high'),
      allowNull: false,
      defaultValue: 'very-high',
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

module.exports = Todo;
