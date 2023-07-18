import mongoose from '../index'
import { ObjectId } from "mongodb";
import { IUser } from '../../types/types';

const Schema = mongoose.Schema

const userSchema = new Schema<IUser>({
  id: ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true } || null,
  password: { type: String, required: true },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User