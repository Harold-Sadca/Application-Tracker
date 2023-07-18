import mongoose from "..";
import { ObjectId } from "mongodb";
import { IApplication } from '../../types/types';

const Schema = mongoose.Schema

const applicationSchema = new Schema<IApplication>({
  id: ObjectId,
  company: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type:String,
    enum: ['To Apply', 'Applied', 'Interview Scheduled', 'Interviewing', 'Offer Received', 'Offer Rejected', 'Rejected']
  },
})

const Application = mongoose.model<IApplication>('Application', applicationSchema)

export default Application