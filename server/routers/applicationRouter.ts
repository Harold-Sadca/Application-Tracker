import { Router } from 'express';
import {
  createApplicationController,
  getApplicationController,
  updateApplicationController,
} from '../controllers/applicationController';
import { authenticate } from '../utils/authMiddleware';

const applicationRouter = Router();

applicationRouter.post(
  '/create/:user_id',
  authenticate,
  createApplicationController
);
applicationRouter.get('/get/:id', authenticate, getApplicationController);
applicationRouter.put('/update/:id', authenticate, updateApplicationController);

export default applicationRouter;
