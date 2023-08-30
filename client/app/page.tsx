'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/utils/APIservices';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/features/currentUserSlice';

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    router.push('/homepage');
  }, []);
  return null;
}
