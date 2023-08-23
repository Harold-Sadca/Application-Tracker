import mongoose from '..';
import { ObjectId } from 'mongodb';
import { TypeApplication } from '../../types/types';

const Schema = mongoose.Schema;

const applicationSchema = new Schema<TypeApplication>({
  id: ObjectId,
  company: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: [
      'To Apply',
      'Applied',
      'Interview Scheduled',
      'Interviewing',
      'Offer Received',
      'Offer Rejected',
      'Rejected',
    ],
  },
});

const Application = mongoose.model<TypeApplication>(
  'Application',
  applicationSchema
);

export default Application;
