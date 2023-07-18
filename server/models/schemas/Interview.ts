import mongoose from "..";
import { ObjectId } from "mongodb";
import { IInterview } from '../../types/types';

const Schema = mongoose.Schema

const interviewSchema = new Schema<IInterview>({
  id: ObjectId,
  time: { type: String, required: true },
  date: { type: Date, required: true },
  application: [{type: Schema.Types.ObjectId, ref: 'Application'}],
})

const Interview = mongoose.model<IInterview>('Interview', interviewSchema)

export default Interview