import User from '../schemas/User';
import { TypeUser } from '../../types/types';

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

export const findUser = async (_id: string) => {
  try {
    const user = await User.findOne({ _id });
    return user;
  } catch (error) {
    console.log(error);
  }
};
