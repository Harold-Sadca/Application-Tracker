'use client';
import { useState } from 'react';
import LoginForm from '@/(components)/(tsx)/LoginForm';
import RegisterForm from '@/(components)/(tsx)/RegisterForm';

export default function Home() {
  const [register, setRegister] = useState(false);

  return (
    <main>
      <div className='main-body'>
        <h1 className='header'>Homepage</h1>
        <div>{register ? <RegisterForm /> : <LoginForm />}</div>
      </div>
    </main>
  );
}
