import { useEffect, useState } from 'react';
//component
import WorkoutFrom from '../components/workoutForm';
import Workoutdetails from '../components/Workoutdetails';
const Home = () => {
  const [workouts, setworkouts] = useState(null);
  useEffect(() => {
    const fetchworkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setworkouts(json);
      }
    };

    fetchworkout();
  }, []);
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
