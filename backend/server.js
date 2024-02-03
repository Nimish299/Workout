require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const workoutRoutes = require('./Routes/workout');
//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    //listen
    app.listen(process.env.PORT, () => {
      console.log('Connected to db And I m listning on port 4000 ');
    });
  })
  .catch((error) => {
    console.log(error);
  });
