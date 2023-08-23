import User from '../schemas/User';
import { TypeUser } from '../../types/types';
import { ObjectId } from 'mongodb';

export const createUser = async (user: TypeUser) => {
  const { email, username, password } = user;
  try {
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password as string);
    return registeredUser;
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async (_id: ObjectId) => {
  try {
    const user = await User.findOne({ _id }).populate({
      path: 'applications',
      populate: {
        path: 'nextInterview',
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
