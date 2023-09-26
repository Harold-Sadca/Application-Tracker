'use client';

import React, { useState } from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import '../../(components)/(css)/dashboard.css';
import { TypeApplicationResponse } from '@/utils/types';
import { usePathname, useRouter } from 'next/navigation';
import InterviewApplicationItem from '@/(components)/(tsx)/InterviewApplicationItem';
import ReactModal from 'react-modal';

const initialValue = {
  company: '',
  date: '',
  interviewType: '',
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
  const router = useRouter();
  const path = usePathname();
  const applications = currentUser.applications;
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(initialValue);

  const handleItemClick = (item: TypeApplicationResponse) => {
    setShowModal(true);
    handleModalValue(
      item.company,
      item.date as unknown as string,
      item.nextInterview?.interviewType as string
    );
  };

  const handleModalValue = (
    company: string,
    date: string,
    interviewType: string
  ) => {
    date = String(new Date(date));
    interviewType;
    console.log(String(date));
    setModalContent({ company, date, interviewType });
    console.log(modalContent);
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
            secondItem={app.nextInterview.date as unknown as string}
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
            <p>Date Of Application: {modalContent.date}</p>
            <p>Next Interview: {modalContent.interviewType}</p>
          </div>
        </div>
      </ReactModal>
    </main>
  );
}
