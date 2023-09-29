import Application from '../schemas/Application';
import { TypeApplication } from '../../types/types';
import User from '../schemas/User';

export const createApplication = async (
  application: TypeApplication,
  _id: string
) => {
  try {
    const newApplication = new Application(application);
    const user = await User.findById(_id);
    user?.applications?.push(newApplication.id);
    newApplication.applicant = user?._id;
    await user?.save();
    await newApplication.save();
    await newApplication.populate('applicant', 'username');
    return newApplication;
  } catch (error) {
    console.log(error);
  }
};

export const getApplication = async (id: string) => {
  try {
    const application = await Application.findById(id).populate(
      'nextInterview'
    );
    console.log(application);
    return application;
  } catch (error) {
    console.log(error);
  }
};

export const updateApplication = async (
  id: string,
  application: Partial<TypeApplication>
) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(id, {
      ...application,
    });
    return updatedApplication;
  } catch (error) {
    console.log(error);
  }
};
