import { Router } from 'express';
import {
  createInterviewController,
  getInterviewController,
  updateInterviewController,
} from '../controllers/interviewController';
import { authenticate } from '../utils/authMiddleware';

const interviewRouter = Router();

interviewRouter.post(
  '/create/:application_id',
  authenticate,
  createInterviewController
);
interviewRouter.get('/get/:id', authenticate, getInterviewController);
interviewRouter.put('/update/:id', authenticate, updateInterviewController);

export default interviewRouter;
