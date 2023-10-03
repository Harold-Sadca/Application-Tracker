'use client';

import React, { useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InterviewApplicationItem from '@/(components)/(tsx)/InterviewApplicationItem';
import ReactModal from 'react-modal';
import '../../(components)/(css)/dashboard.css';
import { TypeApplicationResponse } from '@/utils/types';
import { usePathname, useRouter } from 'next/navigation';
import { formatDate } from '@/utils/utils';
import { TypeInterview } from '../../../server/types/types';
import { getUser, updateInterviewResult } from '@/utils/APIservices';
import { loginUser } from '@/redux/features/currentUserSlice';

const initialValue = {
  company: '',
  date: '',
  interviewType: '',
  interviewId: '',
  time: '',
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Interviews() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.username) {
      getUser().then((res) => {
        dispatch(loginUser(res));
      });
    }
  });
  const router = useRouter();
  const path = usePathname();
  const applications = currentUser.applications;
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(initialValue);
  const [result, setResult] = React.useState('');

  const handleItemClick = (item: TypeApplicationResponse) => {
    setShowModal(true);
    handleModalValue(
      item.company,
      item.date as unknown as string,
      item.nextInterview?.interviewType as string,
      item.nextInterview?._id as unknown as string,
      item.nextInterview?.time
    );
  };

  const handleModalValue = (
    company: string,
    date: string,
    interviewType: string,
    interviewId: string,
    time: string
  ) => {
    date = String(new Date(date));
    interviewType;
    interviewId;
    setModalContent({ company, date, interviewType, interviewId, time });
  };

  const handleUpdate = async (interviewId: string) => {
    console.log(interviewId, { result });
    const updatedInterview = await updateInterviewResult(
      { result },
      interviewId
    );
    console.log(updatedInterview);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult((event.target as HTMLInputElement).value);
  };

  return (
    <main className={path == '/dashboard' ? 'container' : 'container-main'}>
      <div className='header-container'>
        <h1 className='header'>Upcoming Interviews</h1>
        {path == '/dashboard' ? '' : <button className='btn-plus'>+</button>}
      </div>
      <div className='applications-container'>
        {applications.map((app: TypeApplicationResponse) =>
          app.nextInterview && !app.nextInterview.result ? (
            <InterviewApplicationItem
              key={app._id as unknown as string}
              item={app}
              secondItem={{
                date: app.nextInterview.date as unknown as string,
                time: app.nextInterview.time,
              }}
              onItemClick={handleItemClick}
            />
          ) : null
        )}
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
      <ReactModal isOpen={showModal} style={customStyles}>
        <div className='modal-contents'>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className='btn-plus'
          >
            X
          </button>
          <div className='modal-content'>
            <p>Company: {modalContent.company}</p>
            <p>Interview Date: {formatDate(modalContent.date)}</p>
            <p>Time: {modalContent.time}</p>
            <p>Interview Type: {modalContent.interviewType}</p>
          </div>
          <div className='main-body'>
            <FormControl>
              <FormLabel id='demo-row-radio-buttons-group-label'>
                Result
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
                value={result}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='Passed'
                  control={<Radio />}
                  label='Passed'
                />
                <FormControlLabel
                  value='Failed'
                  control={<Radio />}
                  label='Failed'
                />
                <button
                  className='btn-2'
                  onClick={() => handleUpdate(modalContent.interviewId)}
                >
                  Update
                </button>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </ReactModal>
    </main>
  );
}
