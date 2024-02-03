const Workoutdetails = ({ workout }) => {
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
    </div>
  );
};

export default Workoutdetails;
