'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import LoginForm from '@/(components)/(tsx)/LoginForm';
import RegisterForm from '@/(components)/(tsx)/RegisterForm';
import { RootState } from '@/redux/store';
import { loginUser } from '@/redux/features/currentUserSlice';
import { useDispatch } from 'react-redux';
import { getUser } from '@/utils/APIservices';

export default function Home() {
  const register = useSelector(
    (state: RootState) => state.registerReducer.value
  );

  const dispatch = useDispatch();
  getUser().then((res) => {
    dispatch(loginUser(res));

    if (res) {
      router.push('/dashboard');
      return null;
    }
  });
  const router = useRouter();

  return (
    <main>
      <div className='main-body'>
        <div>{register ? <RegisterForm /> : <LoginForm />}</div>
      </div>
    </main>
  );
}
