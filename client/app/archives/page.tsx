'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../(components)/(css)/dashboard.css';
import { TypeApplication } from '../../../server/types/types';
import { RootState } from '@/redux/store';
import { getUser } from '@/utils/APIservices';
import { TypeLoggedInUser } from '@/utils/types';
import { loginUser } from '@/redux/features/currentUserSlice';
import { setApplications } from '@/redux/features/applicationsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Archives() {
  const dispatch = useDispatch();
  let currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );

  const [rejected, setRejected] = useState<TypeApplication[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (!currentUser._id) {
      getUser().then((res: TypeLoggedInUser) => {
        dispatch(loginUser(res));
        dispatch(setApplications(res.applications));

        const rejectedApplications = res.applications.filter(
          (item: TypeApplication) => {
            return item.status === 'Rejected';
          }
        );

        setRejected(rejectedApplications);
        setLoaded(true);
      });
    }
  }, []);

  return (
    <main className='container'>
      <h1 className='header'>Archives</h1>
      <div className='applications-container'>
        {loaded ? (
          rejected.map((app) => (
            <div className='application' key={app._id as unknown as string}>
              <p>{app.company}</p>
              <p>{app.status}</p>
            </div>
          ))
        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <button className='btn-1'>View Archives</button>
    </main>
  );
}
