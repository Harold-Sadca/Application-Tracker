import mongoose from '..';
import { ObjectId } from 'mongodb';
import { TypeInterview } from '../../types/types';

const Schema = mongoose.Schema;

const interviewSchema = new Schema<TypeInterview>({
  time: { type: String, required: true },
  date: { type: Date, required: true },
  application: { type: Schema.Types.ObjectId, ref: 'Application' },
  result: {
    type: String,
    enum: ['Passed', 'Failed'],
  },
  interviewType: {
    type: String,
    enum: [
      'Technical Interviews',
      'Behavioral Interviews',
      'System Design Interviews',
      'Whiteboard Interviews',
      'Coding Interviews',
      'Phone Screen Interviews',
      'Pair Programming Interviews',
      'Case Study Interviews',
    ],
  },
});

const Interview = mongoose.model<TypeInterview>('Interview', interviewSchema);

export default Interview;
