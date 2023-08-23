import mongoose from '..';
import { ObjectId } from 'mongodb';
import { TypeInterview } from '../../types/types';

const Schema = mongoose.Schema;

const interviewSchema = new Schema<TypeInterview>({
  id: ObjectId,
  time: { type: String, required: true },
  date: { type: Date, required: true },
  application: { type: Schema.Types.ObjectId, ref: 'Application' },
});

const Interview = mongoose.model<TypeInterview>('Interview', interviewSchema);

export default Interview;
