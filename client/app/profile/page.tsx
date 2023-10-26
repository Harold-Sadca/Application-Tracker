'use client';

import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { loginUser } from '@/redux/features/currentUserSlice';
import { RootState } from '@/redux/store';
import { getUser } from '@/utils/APIservices';
import { useDispatch, useSelector } from 'react-redux';
import { TypeApplicationResponse } from '@/utils/types';
import '../../(components)/(css)/profile.css';
import InterviewApplicationItem from '@/(components)/(tsx)/InterviewApplicationItem';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [rejected, setRejected] = useState<TypeApplicationResponse[]>([]);
  const [interviewing, setInterviewing] = useState<TypeApplicationResponse[]>(
    []
  );
  const [toApply, setToApply] = useState<TypeApplicationResponse[]>([]);
  const [noResponse, setNoResponse] = useState<TypeApplicationResponse[]>([]);
  useEffect(() => {
    if (!currentUser.username) {
      getUser().then((res) => {
        dispatch(loginUser(res));
        res.applications.map((app: TypeApplicationResponse) => {
          if (app.status == 'Rejected') {
            setRejected((prevVal) => [...prevVal, app]);
          } else if (app.nextInterview) {
            setInterviewing((prevVal) => [...prevVal, app]);
          } else if (app.status == 'To Apply') {
            setToApply((prevVal) => [...prevVal, app]);
          } else {
            setNoResponse((prevVal) => [...prevVal, app]);
          }
        });
      });
    }
  }, [currentUser]);

  const handleItemClick = () => {
    console.log('click');
  };

  return (
    <>
      <section className='main-body'>
        <h1 className='header'>Hello, {currentUser.username}</h1>
        <div className='stat-container'>
          <h4>Applications Statistics</h4>
          <div className='charts-container'>
            <div className='reminders-container'>
              <section className='to-apply'>
                {toApply.length ? (
                  <h4>Do not forget to finish your application with:</h4>
                ) : (
                  <h4>You have no unfinished application</h4>
                )}

                {toApply.map((app: TypeApplicationResponse) => {
                  return (
                    <InterviewApplicationItem
                      key={app._id as unknown as string}
                      item={app}
                      secondItem={null}
                      onItemClick={handleItemClick}
                    />
                  );
                })}
                <p className='button-container'>
                  <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    style={{ backgroundColor: '#7ea3af', color: '#333333' }}
                    onClick={() => router.push('/applications')}
                  >
                    Go To Applications
                  </Button>
                </p>
              </section>
            </div>
            <div className='chart'>
              <PieChart
                data={[
                  {
                    title: 'Interviewing',
                    value: interviewing.length,
                    color: 'var(--success-colour)',
                  },
                  {
                    title: 'Rejected',
                    value: rejected.length,
                    color: 'var(--warning-colour)',
                  },
                  {
                    title: 'No Response',
                    value: noResponse.length,
                    color: 'var(--error-colour)',
                  },
                ]}
                animate={true}
                label={({ dataEntry }) =>
                  `${dataEntry.title}: ${dataEntry.value}`
                }
                labelStyle={{
                  fontSize: '5px',
                  fill: 'var(--text-colour)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
