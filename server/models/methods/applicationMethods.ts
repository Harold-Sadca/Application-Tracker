import Application from "../schemas/Application";
import { IApplication } from "../../types/types";

export const createApplication = async (application:IApplication) => {
  try {
    const newApplication = Application.create(application)
    return newApplication
  } catch (error) {
    console.log(error)
  }
}

export const getApplication = async (id:string) => {
  try {
    const application = Application.findById(id)
    return application
  }catch (error) {
    console.log(error)
  }
}

export const updateApplication = async (id:string, application:IApplication) => {
  try {
    const updatedApplication = Application.findByIdAndUpdate(id,{...application})
    return updatedApplication
  } catch (error) {
    console.log(error)
  }
}