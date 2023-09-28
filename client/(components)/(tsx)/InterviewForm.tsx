'use client';
import React, { useState, FormEvent, useRef, ChangeEvent } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../(css)/applicationForm.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addApplication, addInterview } from '@/utils/APIservices';
import { TypeApplication, TypeInterview } from '../../../server/types/types';
import { generateTimeSlots, interviewTypes } from '@/utils/utils';

interface InterviewApplicationItemProps {
  applicationId: string;
}

const initialValue = {
  SelectedTime: '',
  InterviewType: '',
};

const InterviewForm: React.FC<InterviewApplicationItemProps> = ({
  applicationId,
}) => {
  const times = generateTimeSlots();
  const types = interviewTypes;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [interviewDetails, setInterviewDetails] = useState(initialValue);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newInterview = {
      date: startDate,
      time: interviewDetails.SelectedTime,
      interviewType: interviewDetails.InterviewType,
    } as TypeInterview;
    const interview = await addInterview(newInterview, applicationId);
    if (interview) {
      setInterviewDetails(initialValue);
    }
  }

  const handleChangeChange = (e: SelectChangeEvent<string>) => {
    setInterviewDetails({
      ...interviewDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className='application-form'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(date) => setStartDate(date as Date)}
          className='application-content'
        />
      </LocalizationProvider>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Time</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={interviewDetails.SelectedTime}
            label='Select Application Time'
            name='SelectedTime'
            onChange={handleChangeChange}
          >
            {times.map((time, idx) => {
              return (
                <MenuItem key={idx} value={time}>
                  {time}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Interview Type</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={interviewDetails.InterviewType}
            label='Select Interview Type'
            name='InterviewType'
            onChange={handleChangeChange}
          >
            {types.map((type, idx) => {
              return (
                <MenuItem key={idx} value={type}>
                  {type}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <button type='submit' className='btn-submit'>
        Submit
      </button>
    </form>
  );
};

export default InterviewForm;
