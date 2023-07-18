import { Router } from 'express';
import { createApplicationController, getApplicationController, updateApplicationController } from '../controllers/applicationController';

const applicationRouter = Router()

applicationRouter.post('/create', createApplicationController)
applicationRouter.get('/get/:id', getApplicationController)
applicationRouter.put('/update/:id', updateApplicationController)

export default applicationRouter