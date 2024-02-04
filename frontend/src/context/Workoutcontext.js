import { createContext, useReducer } from 'react';

export const WorkoutContext = createContext();
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      };
    case 'CREATE_WORKOUTS':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUTS':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });
  //    dispatch({type:'CREATE_WORKOUT',payload:[{   },{}]})
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
