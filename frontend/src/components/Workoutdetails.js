import { useWorkoutcontext } from '../hooks/useworkoutcontext';
const Workoutdetails = ({ workout }) => {
  const { dispatch } = useWorkoutcontext();
  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUTS', payload: json });
    } else {
      console.error('Error fetching workouts:', json);
    }
  };
  return (
    <div className='workout-details'>
      <h4>{workout.tittle}</h4>
      <p>
        <strong> Load(kg):</strong>
        {workout.loads}
      </p>
      <p>
        <strong>Reps(kg):</strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>
        DELETE
      </span>
    </div>
  );
};

export default Workoutdetails;
