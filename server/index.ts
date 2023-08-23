import express, { Express } from 'express';
import session, { SessionOptions } from 'express-session';
import MongoDBStoreConstructor, {
  MongoDBSessionOptions,
} from 'connect-mongodb-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import applicationRouter from './routers/applicationRouter';
import interviewRouter from './routers/interviewRouter';
import userRouter from './routers/userRouter';
import dotenv from 'dotenv';
import User from './models/schemas/User';
import { TypeUser } from './types/types';

dotenv.config();
const port = process.env.PORT;
const uri = process.env.DB_URL as string;
const secret = process.env.SECRET_KEY_WORD as string;
const app: Express = express();

const MongoDBStore = MongoDBStoreConstructor(session);

const store = new MongoDBStore({
  uri,
  secret,
  touchAfter: 24 * 60 * 60,
  collection: 'sessions',
} as MongoDBSessionOptions);

store.on('error', function (e) {
  console.log('SESSION STORE ERROR', e);
});
app.use(cookieParser(secret));
const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
  credentials: true,
};

app
  .use(
    cors({
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  )
  .use(bodyParser.json())
  .use(session(sessionConfig as SessionOptions))
  .use(passport.initialize())
  .use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser((user: TypeUser, callback) => {
  process.nextTick(() => {
    return callback(null, {
      id: user._id,
      username: user.username,
    });
  });
});

passport.deserializeUser((user: TypeUser, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

app.use('/application', applicationRouter);
app.use('/interview', interviewRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Running at ${port}`);
});
