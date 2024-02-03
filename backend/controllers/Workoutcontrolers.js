const Workout = require('../models/Workoutmodel');
const mongoose = require('mongoose');
//get all
const getworkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdat: -1 });
  res.status(200).json(workout);
};
//single
const getworkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'NO such workout' });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ msg: 'NO such workout' });
  }
  res.status(200).json(workout);
};
//create workout

const createworkout = async (req, res) => {
  const { tittle, loads, reps } = req.body;
  try {
    const workout = await Workout.create({ tittle, loads, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteworkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'NO such workout' });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ msg: 'NO such workout' });
  }
  res.status(200).json(workout);
};
// update
const updateworkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: 'NO such workout' });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ msg: 'NO such workout' });
  }
  res.status(200).json(workout);
};
module.exports = {
  createworkout,
  getworkout,
  getworkouts,
  deleteworkout,
  updateworkout,
};
