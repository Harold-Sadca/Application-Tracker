import Interview from "../schemas/Interview";
import { IInterview } from "../../types/types";
import { ObjectId } from "mongodb";

export const createInterview = async (id:ObjectId, interview:Partial<IInterview>) => {
  try {
    const newInterview = new Interview(interview)
    newInterview.application = id
    await newInterview.save()
    return newInterview
  }catch (error) {
    console.log(error)
  }
}

export const getInterview = async (id:string) => {
  try {
    const interview = await Interview.findById(id)
    return interview
  }catch (error) {
    console.log(error)
  }
}

export const updateInterview = async (id:string, interview:IInterview) => {
  try {
    const updatedInterview = await Interview.findByIdAndUpdate(id, {...interview})
    return updatedInterview
  } catch (error) {
    console.log(error)
  }
}