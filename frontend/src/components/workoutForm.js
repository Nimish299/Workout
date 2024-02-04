import { useState } from 'react';
import { useWorkoutcontext } from '../hooks/useworkoutcontext';
const WorkoutFrom = ({ workout }) => {
  const { dispatch } = useWorkoutcontext();
  const [tittle, setTittle] = useState('');
  const [loads, setLoads] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { tittle, loads, reps };
    const responce = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await responce.json();

    if (!responce.ok) {
      setError(json.error);
    } else {
      setLoads('');
      setReps('');
      setTittle('');
      setError(null);
      console.log('New workout added', json);
      dispatch({ type: 'CREATE_WORKOUTS', payload: json });
    }
  };
  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add New workout </h3>
      <label>Title:</label>
      <input
        type='text'
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
      />
      <label>Loads</label>
      <input
        type='number'
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
      />
      <label>Reps:</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutFrom;
