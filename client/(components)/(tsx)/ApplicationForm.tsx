'use client';
import React, { useState, FormEvent, useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../(css)/applicationForm.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addApplication } from '@/utils/APIservices';
import { TypeApplication } from '../../../server/types/types';

const status = [
  'To Apply',
  'Applied',
  'Interview Scheduled',
  'Interviewing',
  'Offer Received',
  'Offer Rejected',
  'Rejected',
];

export default function ApplicationForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [selectedStatus, setSelectedStatus] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newApplication = {
      company: formData.getAll('company').join(''),
      date: startDate,
      status: selectedStatus,
    } as TypeApplication;
    const application = await addApplication(
      newApplication,
      currentUser._id as string
    );
    if (application) {
      formRef.current?.reset();
      setSelectedStatus('');
    }
  }

  const handleStatusChange = (e: any) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className='application-form'>
      <input
        type='text'
        className='application-content'
        placeholder='Company name'
        name='company'
        required
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(date) => setStartDate(date as Date)}
          className='application-content'
        />
      </LocalizationProvider>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Select Application Status
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectedStatus}
            label='Select Application Status'
            onChange={handleStatusChange}
          >
            {status.map((stat, idx) => {
              return (
                <MenuItem key={idx} value={stat}>
                  {stat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <button type='submit' className='btn-1'>
        Submit
      </button>
    </form>
  );
}
