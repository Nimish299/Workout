import { useEffect } from 'react';
import { useWorkoutcontext } from '../hooks/useworkoutcontext';
//component
import WorkoutFrom from '../components/workoutForm';
import Workoutdetails from '../components/Workoutdetails';
const Home = () => {
  const { workouts, dispatch } = useWorkoutcontext();

  // const [workouts, setworkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: json });
        } else {
          console.error('Error fetching workouts:', json);
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className='home'>
      <div className='workout'>
        {workouts &&
          workouts.map((workout) => (
            <Workoutdetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutFrom />
    </div>
  );
};

export default Home;
