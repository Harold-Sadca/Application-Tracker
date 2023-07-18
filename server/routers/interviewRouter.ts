import { Router } from 'express';
import { createInterviewController, getInterviewController, updateInterviewController } from '../controllers/interviewController';

const interviewRouter = Router()

interviewRouter.post('/create', createInterviewController)
interviewRouter.get('/get/:id', getInterviewController)
interviewRouter.put('/update/:id', updateInterviewController)

export default interviewRouter