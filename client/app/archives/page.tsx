'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../(components)/(css)/dashboard.css';
import { TypeApplication } from '../../../server/types/types';
import { RootState } from '@/redux/store';
import { getUser } from '@/utils/APIservices';
import { TypeApplicationResponse, TypeLoggedInUser } from '@/utils/types';
import { loginUser } from '@/redux/features/currentUserSlice';
import { setApplications } from '@/redux/features/applicationsSlice';

export default function Archives() {
  const dispatch = useDispatch();
  let currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );

  useEffect(() => {
    if (!currentUser.username) {
      getUser().then((res: TypeLoggedInUser) => {
        dispatch(loginUser(res));
        dispatch(setApplications(res.applications));
      });
    }
  }, []);

  return (
    <main className='container'>
      <h1 className='header'>Archives</h1>
      <div className='applications-container'>
        {currentUser.applications.map((app: TypeApplicationResponse) =>
          app.status == 'Rejected' ? (
            <div className='application' key={app._id as unknown as string}>
              <p>{app.company}</p>
              <p>{app.status}</p>
            </div>
          ) : null
        )}
      </div>
      <button className='btn-1'>View Archives</button>
    </main>
  );
}
