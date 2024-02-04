import { useState } from 'react';
import { useWorkoutcontext } from '../hooks/useworkoutcontext';
const WorkoutFrom = ({ workout }) => {
  const { dispatch } = useWorkoutcontext();
  const [tittle, setTittle] = useState('');
  const [loads, setLoads] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFilds, setEmptyFilds] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { tittle, loads, reps };
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFilds(json.emptyFilds);
    } else {
      setLoads('');
      setReps('');
      setTittle('');
      setError(null);
      setEmptyFilds([]);
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
        className={emptyFilds && emptyFilds.includes('tittle') ? 'error' : ''}
      />
      <label>Loads</label>
      <input
        type='number'
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
        className={emptyFilds && emptyFilds.includes('loads') ? 'error' : ''}
      />
      <label>Reps:</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFilds && emptyFilds.includes('reps') ? 'error' : ''}
      />
      <button>Add workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutFrom;
