import express from 'express';

import Quiz from './models/Quiz.js';

import quizRoutes from './routes/quizRoutes.js';

const port = 5000;

const app = express();

app.use('/app/quiz',quizRoutes);

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`)
});

