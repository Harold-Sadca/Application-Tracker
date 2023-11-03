import { Router } from 'express';
import {
  createUserController,
  loginController,
  getUser,
  logoutUser,
} from '../controllers/userController';
import { authenticate } from '../utils/authMiddleware';

const userRouter = Router();

userRouter.post('/register', createUserController);
userRouter.post('/login', loginController);
userRouter.delete('/logout', logoutUser);
userRouter.get('/get-user', authenticate, getUser);

export default userRouter;
