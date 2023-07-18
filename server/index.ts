import express, {Express} from 'express';
import applicationRouter from './routers/applicationRouter';
import interviewRouter from './routers/interviewRouter';
import userRouter from './routers/userRouter';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
const app:Express = express();

app.use('application',applicationRouter)
app.use('interview',interviewRouter)
app.use('user',userRouter)

app.listen(port, () => {
  console.log(`Running at ${port}`)
})