'use client';

import React, { useRef, useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { TypeApplication } from '../../../server/types/types';
import ReactModal from 'react-modal';
import '../../(components)/(css)/dashboard.css';

const initialValue = {
  company: '',
  date: '',
  nextInterview: '',
  status: '',
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
        {currentUser.applications.map((app: TypeApplication) => (
          <div
            className='application'
            onClick={() => {
              setShowModal(true);
              handleModalValue(
                app.company,
                app.date as unknown as string,
                app.nextInterview?.date as string,
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
      <ReactModal isOpen={showModal}>
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
            <p>Next Interview{modalContent.nextInterview}</p>
            <p>Application Status: {modalContent.status}</p>
          </div>
        </div>
      </ReactModal>
    </main>
  );
}
