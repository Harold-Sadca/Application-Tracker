'use client';

import React from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import '../../(components)/(css)/dashboard.css';
import { TypeApplicationResponse } from '@/utils/types';
import { usePathname, useRouter } from 'next/navigation';
import InterviewApplicationItem from '@/(components)/(tsx)/InterviewApplicationItem';

export default function Interviews() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const router = useRouter();
  const path = usePathname();
  const applications = currentUser.applications;

  const handleItemClick = (item: TypeApplicationResponse) => {
    console.log(item);
    // Handle item click logic
  };

  return (
    <main className='container'>
      <div className='header-container'>
        <h1 className='header'>Interviews</h1>
        <button className='btn-plus'>+</button>
      </div>
      <div className='applications-container'>
        {applications.map((app: TypeApplicationResponse) => (
          <InterviewApplicationItem
            key={app._id as unknown as string}
            item={app}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
      {path == '/dashboard' ? (
        <button className='btn-1' onClick={() => router.push('/interviews')}>
          View Interviews
        </button>
      ) : (
        <button className='btn-1' onClick={() => router.push('/dashboard')}>
          Back To Dashboard
        </button>
      )}
    </main>
  );
}
