'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/utils/APIservices';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/features/currentUserSlice';

export default function Main() {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    getUser().then((res) => {
      dispatch(loginUser(res));
      res && router.push('/homepage');
    });
  }, []);
  return null;
}
