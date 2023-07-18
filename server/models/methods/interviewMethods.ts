import Interview from "../schemas/Interview";
import { IInterview } from "../../types/types";

export const createInterview = async (interview:IInterview) => {
  try {
    const newInterview = Interview.create(interview)
    return newInterview
  }catch (error) {
    console.log(error)
  }
}

export const getInterview = async (id:string) => {
  try {
    const interview = Interview.findById(id)
    return interview
  }catch (error) {
    console.log(error)
  }
}

export const updateInterview = async (id:string, interview:IInterview) => {
  try {
    const updatedInterview = Interview.findByIdAndUpdate(id, {...interview})
    return updatedInterview
  } catch (error) {
    console.log(error)
  }
}