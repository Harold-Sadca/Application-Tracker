import { Request, Response, NextFunction } from 'express';
import passport, { LogOutOptions } from 'passport';
import { createUser, findUser } from '../models/methods/userMethods';
import { TypeUser } from '../types/types';
import { ObjectId } from 'mongodb';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (username && email && password) {
      const user = { username, email, password };
      const newUser = await createUser(user);
      const response = {
        username: newUser?.username,
        email: newUser?.email,
      };
      res.status(201).send(response);
    } else {
      res.status(400).send(JSON.stringify('Missing Credentials.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    'local',
    (err: Error | null, user: TypeUser | false, info: any) => {
      if (err) throw err;
      if (!user) res.send(JSON.stringify('No User Exists'));
      else {
        req.logIn(user, async (err) => {
          if (err) throw err;
          const { _id } = req.user as TypeUser;
          req.user = (await findUser(_id as ObjectId)) as TypeUser;
          res.status(200).send(req.user);
        });
      }
    }
  )(req, res, next);
};

export const getUser = async (req: Request, res: Response) => {
  const sessionID = req.sessionID;
  console.log({ sessionID });
  try {
    const { id } = req.user as TypeUser;
    req.user = (await findUser(id as ObjectId)) as TypeUser;
    res.status(201).send(req.user);
  } catch (e) {
    res.status(400).send(JSON.stringify('Cannot find user'));
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(JSON.stringify('You have logged out'));
  });
};
