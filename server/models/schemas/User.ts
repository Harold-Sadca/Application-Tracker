import { ObjectId } from 'mongodb';
import mongoose from '../index';
import passportLocalMongoose from 'passport-local-mongoose';
import { TypeUser } from '../../types/types';

const Schema = mongoose.Schema;

const userSchema = new Schema<TypeUser>({
  email: { type: String, required: true } || null,
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model<TypeUser>('User', userSchema);

export default User;
