import { createUser, login } from "../models/methods/userMethods";
import { Request, Response } from 'express';

export const createUserController = async (req:Request, res:Response) => {
  try {
    const {name, email, password} = req.body
    if (name && email && password) {
      const user = {name, email, password}
      const newUser = await createUser(user)
      res.status(201).send(newUser)
    } else {
      res.status(400).send(JSON.stringify('Missing Credentials.'))
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const loginController = async (req:Request, res:Response) => {
  try {
    const {name, password} = req.body
    if (name && password) {
      const user = await login(name, password)
      res.status(200).send(user)
    } else {
      res.status(400).send(JSON.stringify('Missing Credentials'))
    }
  } catch (error) {
    res.status(500).send(error)
  }
}