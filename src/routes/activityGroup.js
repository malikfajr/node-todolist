const router = require('express').Router();
const {
  getAllActivityGroups,
  getActivityById,
  createActivityGroup,
  updateActivityGroup,
  deleteActivityGroup,
} = require('../controllers/activityGroup');

router.get('/', getAllActivityGroups);
router.get('/:id', getActivityById);
router.post('/', createActivityGroup);
router.patch('/:id', updateActivityGroup);
router.delete('/:id', deleteActivityGroup);

module.exports = router;
