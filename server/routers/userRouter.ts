import { Router } from 'express';
import { createUserController, loginController } from '../controllers/userController';

const userRouter = Router()

userRouter.post('/create', createUserController)
userRouter.get('/login', loginController)

export default userRouter