import quizController from "../controllers/quizController.js";
import express from 'express';

const quizRoutes = express.Router();

quizRoutes.get('/',quizController.getAllQuiz);

export default quizRoutes;