const router = require('express').Router();

router.use('/activity-groups', require('./activityGroup'));
router.use('/todo-items', require('./todos'));

module.exports = router;
