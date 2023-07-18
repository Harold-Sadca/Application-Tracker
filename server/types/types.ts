import { ObjectId } from "mongodb";

export interface IUser {
  id?: ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface IApplication {
  id?: ObjectId;
  company: string;
  date:Date;
  status: 'To Apply' | 'Applied' | 'Interview Scheduled' | 'Interviewing' | 'Offer Received' | 'Offer Rejected' | 'Rejected'
}

export interface IInterview {
  id?:ObjectId;
  time:string;
  date:Date;
  application:string;
}