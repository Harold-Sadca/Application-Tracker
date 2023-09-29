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
    const { application_id } = req.params;
    console.log(application_id);
    const { date, time, interviewType } = req.body;
    if (application_id && date && time && interviewType) {
      const interview = { date, time, interviewType };
      const newInterview = await createInterview(
        interview,
        application_id as unknown as ObjectId
      );
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
    const { result } = req.body;
    console.log(id, result);
    if (result && id) {
      const updatedInterview = await updateInterview(id, result);
      res.status(200).send(updatedInterview);
    } else {
      res.status(400).send(JSON.stringify('Missing Some Information.'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
