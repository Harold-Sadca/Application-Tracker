/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Main() {
  const router = useRouter();

  return (
    <div className='main-body'>
      <h1>Welcome to TrackWise</h1>
      <p className='welcome-details'>
        Whether you're a job seeker, college applicant, or grant applicant,
        TrackWise is here to make your journey easier.
      </p>
      <p className='welcome-details'>
        <strong>Track and Manage Your Applications with Ease</strong>
        <br />
        With our user-friendly platform, you can effortlessly keep tabs on your
        applications in one place. Say goodbye to missed deadlines and
        confusion.
      </p>
      <p className='welcome-details'>
        <strong>Stay Informed</strong>
        <br />
        Receive real-time updates on the status of your applications. We'll keep
        you informed every step of the way.
      </p>
      <p className='welcome-details'>
        <strong>Plan Your Future</strong>
        <br />
        Plan your next steps with confidence. Visualize your progress and stay
        organized.
      </p>
      <p className='welcome-details'>
        <strong>Ready to Get Started?</strong>
        <br />
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          style={{ backgroundColor: '#7ea3af', color: '#333333' }}
          onClick={() => router.push('/homepage')}
        >
          Get Started
        </Button>
      </p>
    </div>
  );
}
