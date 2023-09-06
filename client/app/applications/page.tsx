'use client';

import React, { useRef, useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { TypeApplication } from '../../../server/types/types';
import ReactModal from 'react-modal';
import '../../(components)/(css)/dashboard.css';
import { TypeApplicationResponse } from '@/utils/types';

const initialValue = {
  company: '',
  date: '',
  nextInterview: '',
  status: '',
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
export default function Applications() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [modalContent, setModalContent] = useState(initialValue);
  const [showModal, setShowModal] = useState(false);
  const appElement = useRef<HTMLElement | null>(null);
  useEffect(() => {
    appElement.current = document.body;
    ReactModal.setAppElement(appElement.current);
  }, []);
  console.log(currentUser.applications);
  const handleModalValue = (
    company: string,
    date: string,
    nextInterview: string,
    status: string
  ) => {
    date = String(new Date(date));
    nextInterview = String(new Date(nextInterview));
    console.log(String(date));
    setModalContent({ company, date, nextInterview, status });
    console.log(modalContent);
  };
  return (
    <main className='container'>
      <div className='header-container'>
        <h1 className='header'>Applications</h1>{' '}
        <button className='btn-plus'>+</button>
      </div>

      <div className='applications-container'>
        {currentUser.applications.map((app: TypeApplicationResponse) => (
          <div
            className='application'
            onClick={() => {
              setShowModal(true);
              handleModalValue(
                app.company,
                app.date as unknown as string,
                app.nextInterview?.date as unknown as string,
                app.status
              );
            }}
            key={app._id as unknown as string}
          >
            <p>{app.company}</p>
            <p>{app.status}</p>
          </div>
        ))}
      </div>
      <button className='btn-1'>View Applications</button>
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
            <p>Next Interview: {modalContent.nextInterview}</p>
            <p>Application Status: {modalContent.status}</p>
          </div>
        </div>
      </ReactModal>
    </main>
  );
}
