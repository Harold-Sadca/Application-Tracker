'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { TypeApplication } from '../../../server/types/types';
import '../../(components)/(css)/dashboard.css';

export default function Interviews() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const applications = currentUser.applications;
  return (
    <main className='container'>
      <h1 className='header'>Interviews</h1>
      <div className='applications-container'>
        {applications.map((app: TypeApplication) => {
          return (
            <div key={app._id as unknown as string} className='application'>
              {' '}
              Interview
            </div>
          );
        })}
      </div>
      <button className='btn-1'>View Interviews</button>
    </main>
  );
}
