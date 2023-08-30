'use client';
import '../../(components)/(css)/dashboard.css';
import { TypeApplication } from '../../../server/types/types';

export default function Archives() {
  const archives = [
    {
      _id: '64e671834cbc5ff5cd88b4b0',
      company: 'Company 1',
      date: '2023-08-23T20:52:19.050Z',
      status: 'To Apply',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4ba',
        time: '10:00 AM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Passed',
        application: '64e671834cbc5ff5cd88b4b0',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
    {
      _id: '64e671834cbc5ff5cd88b4b5',
      company: 'Company 2',
      date: '2023-08-23T20:52:19.050Z',
      status: 'Applied',
      applicant: '64e671834cbc5ff5cd88b4ac',
      __v: 0,
      nextInterview: {
        _id: '64e671834cbc5ff5cd88b4be',
        time: '2:30 PM',
        date: '2023-08-23T20:52:19.050Z',
        result: 'Failed',
        application: '64e671834cbc5ff5cd88b4b5',
        __v: 0,
      },
    },
  ];
  return (
    <main className='container'>
      <h1 className='header'>Archives</h1>
      <div className='applications-container'>
        {archives.map((app, idx) => (
          <div className='application' key={idx}>
            {/* <div className='application' key={app._id as unknown as string}> */}
            <p>{app.company}</p>
            <p>{app.status}</p>
          </div>
        ))}
      </div>
      <button className='btn-1'>View Archives</button>
    </main>
  );
}
