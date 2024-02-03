const express = require('express');
const router = express.Router();
const {
  createworkout,
  getworkouts,
  getworkout,
  updateworkout,
  deleteworkout,
} = require('../controllers/Workoutcontrolers');
// router.get('/', () => {});
//all
router.get('/', getworkouts);

// single
router.get('/:id', getworkout);

// post
router.post('/', createworkout);

// delete
router.delete('/:id', deleteworkout);

// update

router.patch('/:id', updateworkout);

module.exports = router;
