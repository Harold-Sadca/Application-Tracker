import { ObjectId } from 'mongodb';

export interface TypeUser {
  _id?: ObjectId;
  username?: string;
  email?: string;
  password?: string | null;
}

export interface TypeApplication {
  id?: ObjectId;
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
}

export interface TypeInterview {
  id?: ObjectId;
  time: string;
  date: Date;
  application: ObjectId;
}
