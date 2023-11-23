const Activity = require('./activity');
const Todo = require('./todo');
const db = require('../config/database');

Activity.hasMany(Todo, {
  foreignKey: 'activity_group_id',
  as: 'todos',
});

Todo.belongsTo(Activity, {
  foreignKey: 'activity_group_id',
  as: 'activity',
});

(async () => {
  try {
    await db.sync({ alter: true, force: false });
  } catch (error) {
    console.log('failed to connect database.', error);
  }
})();

module.exports = { Activity, Todo };
