'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../(components)/(css)/dashboard.css';
import { TypeApplication } from '../../../server/types/types';
import { RootState } from '@/redux/store';

export default function Archives() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [rejected, setRejected] = useState<TypeApplication[]>([]);
  useEffect(() => {
    const rejectedApplications = currentUser.applications.filter(
      (item: TypeApplication) => {
        return item.status === 'Rejected';
      }
    );

    setRejected([...rejected, ...rejectedApplications]);
  }, []);

  return (
    <main className='container'>
      <h1 className='header'>Archives</h1>
      <div className='applications-container'>
        {rejected.map((app) => (
          <div className='application' key={app._id as unknown as string}>
            <p>{app.company}</p>
            <p>{app.status}</p>
          </div>
        ))}
      </div>
      <button className='btn-1'>View Archives</button>
    </main>
  );
}
