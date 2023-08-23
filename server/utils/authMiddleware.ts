import { Request, Response, NextFunction } from 'express';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send(JSON.stringify('Bad Request'));
  }
};
