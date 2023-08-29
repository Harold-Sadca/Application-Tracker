'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { TypeApplication } from '../../../server/types/types';

export default function Applications() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  console.log(currentUser.applications);
  console.log(currentUser);
  return (
    <main>
      <div>
        <h1 className='header'>Applications Page</h1>
        <div className='applications-container'>
          {currentUser.applications.map((app: TypeApplication) => (
            <div className='applications' key={app._id as unknown as string}>
              <p>{app.company}</p>
              <p>{app.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
