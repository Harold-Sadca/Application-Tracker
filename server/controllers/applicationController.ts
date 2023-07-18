import { createApplication, getApplication, updateApplication } from "../models/methods/applicationMethods";
import { Request, Response } from 'express';

export const createApplicationController = async (req:Request, res:Response) => {
  try {
    const {company, date, status} = req.body
    if (company && date && status) {
      const application = {company, date, status}
      const newApplication  = createApplication(application)
      res.status(201).send(newApplication)
    } else {
      res.status(400).send((JSON.stringify('Missing Some Information.')))
    }
  }catch (error) {
    res.status(500).send(error)
  }
}

export const getApplicationController = async (req:Request, res:Response) => {
  try {
    const {id} = req.params
    const application = getApplication(id)
    res.status(200).send(application)
  }catch (error) {
    res.status(500).send(error)
  }
}

export const updateApplicationController = async (req:Request, res:Response) => {
  try {
    const {id} = req.params
    const {company, date, status} = req.body
    if (company && date && status && id) {
      const application = {company, date, status}
      const updatedApplication  = updateApplication(id, application)
      res.status(201).send(updatedApplication)
    } else {
      res.status(400).send((JSON.stringify('Missing Some Information.')))
    }
  }catch (error) {
    res.status(500).send(error)
  }
}