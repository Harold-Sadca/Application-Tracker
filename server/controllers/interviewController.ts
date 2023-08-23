import { ObjectId } from 'mongodb';
import {
  createInterview,
  getInterview,
  updateInterview,
} from '../models/methods/interviewMethods';
import { Request, Response } from 'express';

export const createInterviewController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params as unknown as ObjectId;
    const { date, time } = req.body;
    if (id && date && time) {
      const interview = { date, time };
      const newInterview = await createInterview(interview, id);
      res.status(201).send(newInterview);
    } else {
      res.status(400).send(JSON.stringify('Missing Some Information.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getInterviewController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const interview = await getInterview(id);
    res.status(200).send(interview);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateInterviewController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { date, time, application } = req.body;
    const interview = { date, time, application };
    if (date && time && application && id) {
      const updatedInterview = updateInterview(id, interview);
      res.status(200).send(updateInterview);
    } else {
      res.status(400).send(JSON.stringify('Missing Some Information.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
