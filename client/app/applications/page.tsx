'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { TypeApplication } from '../../../server/types/types';
import '../../(components)/(css)/dashboard.css';

export default function Applications() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  return (
    <main className='container'>
      <div className='header-container'>
        <h1 className='header'>Applications</h1>{' '}
        <button className='btn-plus'>+</button>
      </div>

      <div className='applications-container'>
        {currentUser.applications.map((app: TypeApplication) => (
          <div className='application' key={app._id as unknown as string}>
            <p>{app.company}</p>
            <p>{app.status}</p>
          </div>
        ))}
      </div>
      <button className='btn-1'>View Applications</button>
    </main>
  );
}
