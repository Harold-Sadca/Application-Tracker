import { ObjectId } from 'mongodb';

export interface TypeUser {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string | null;
  applications?: [ObjectId] | null;
}

export interface TypeApplication {
  _id?: ObjectId;
  company: string;
  date: Date;
  status:
    | 'To Apply'
    | 'Applied'
    | 'Interview Scheduled'
    | 'Interviewing'
    | 'Offer Received'
    | 'Offer Rejected'
    | 'Rejected';
  applicant?: ObjectId;
  nextInterview?: ObjectId;
}

export interface TypeInterview {
  _id?: ObjectId;
  time: string;
  date: Date;
  application: ObjectId;
  result?: 'Passed' | 'Failed';
}
