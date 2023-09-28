import Interview from '../schemas/Interview';
import { TypeInterview } from '../../types/types';
import { ObjectId } from 'mongodb';
import Application from '../schemas/Application';

export const createInterview = async (
  interview: Partial<TypeInterview>,
  id: ObjectId
) => {
  try {
    const newInterview = new Interview(interview);
    console.log(id);
    const application = await Application.findById(id);
    console.log(application);
    newInterview.application = id;
    application!.nextInterview = newInterview._id;
    await application?.save();
    await newInterview.save();
    return newInterview;
  } catch (error) {
    console.log(error);
  }
};

export const getInterview = async (id: string) => {
  try {
    const interview = await Interview.findById(id);
    return interview;
  } catch (error) {
    console.log(error);
  }
};

export const updateInterview = async (id: string, interview: TypeInterview) => {
  try {
    const updatedInterview = await Interview.findByIdAndUpdate(id, {
      ...interview,
    });
    return updatedInterview;
  } catch (error) {
    console.log(error);
  }
};
