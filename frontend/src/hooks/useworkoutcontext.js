import { WorkoutContext } from '../context/Workoutcontext';
import { useContext } from 'react';

export const useWorkoutcontext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      'use woroutcontext must be used inside an workoutcontext provider'
    );
  }
  return context;
};
