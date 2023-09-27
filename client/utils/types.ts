import { TypeApplication, TypeInterview } from '../../server/types/types';

export interface TypeLogin {
  username: string;
  password: string;
}

export interface TypeRegister {
  username: string;
  password: string;
  email: string;
}

export interface TypeLoggedInUser {
  _id: string;
  username: string;
  email: string;
  applications: [];
}

export interface TypeApplicationResponse
  extends Omit<TypeApplication, 'nextInterview'> {
  nextInterview: TypeInterview;
}
