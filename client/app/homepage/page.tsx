'use client';
import { useSelector } from 'react-redux';
import LoginForm from '@/(components)/(tsx)/LoginForm';
import RegisterForm from '@/(components)/(tsx)/RegisterForm';
import { RootState } from '@/redux/store';

export default function Home() {
  const register = useSelector(
    (state: RootState) => state.registerReducer.value
  );

  return (
    <main>
      <div className='main-body'>
        <h1 className='header'>Homepage</h1>
        <div>{register ? <RegisterForm /> : <LoginForm />}</div>
      </div>
    </main>
  );
}
