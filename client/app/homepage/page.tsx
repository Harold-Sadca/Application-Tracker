'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import LoginForm from '@/(components)/(tsx)/LoginForm';
import RegisterForm from '@/(components)/(tsx)/RegisterForm';
import { RootState } from '@/redux/store';
import { loginUser } from '@/redux/features/currentUserSlice';
import { useDispatch } from 'react-redux';
import { getUser } from '@/utils/APIservices';
import { setApplications } from '@/redux/features/applicationsSlice';
import { TypeLoggedInUser } from '@/utils/types';

export default function Home() {
  const register = useSelector(
    (state: RootState) => state.registerReducer.value
  );
  const router = useRouter();

  const dispatch = useDispatch();
  getUser().then((res: TypeLoggedInUser) => {
    if (res) {
      dispatch(loginUser(res));
      dispatch(setApplications(res.applications));
      router.push('/dashboard');
      return null;
    }
  });

  return (
    <main>
      <div className='main-body'>
        <div>{register ? <RegisterForm /> : <LoginForm />}</div>
      </div>
    </main>
  );
}
