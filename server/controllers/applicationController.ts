import {
  createApplication,
  getApplication,
  updateApplication,
} from '../models/methods/applicationMethods';
import { Request, Response } from 'express';

export const createApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { company, date, status } = req.body;
    const { user_id } = req.params;
    if (company && date && status && user_id) {
      const application = { company, date, status };
      const newApplication = await createApplication(application, user_id);
      res.status(201).send(newApplication);
    } else {
      res.status(400).send(JSON.stringify('Missing Some Information.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getApplicationController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const application = await getApplication(id);
    res.status(200).send(application);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { company, date, status } = req.body;
    if (company && date && status && id) {
      const application = { company, date, status };
      const updatedApplication = await updateApplication(id, application);
      res.status(201).send(updatedApplication);
    } else {
      res.status(400).send(JSON.stringify('Missing Some Information.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
