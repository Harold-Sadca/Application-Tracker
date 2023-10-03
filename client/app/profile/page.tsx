'use client';

import { loginUser } from '@/redux/features/currentUserSlice';
import { RootState } from '@/redux/store';
import { getUser } from '@/utils/APIservices';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.username) {
      getUser().then((res) => {
        dispatch(loginUser(res));
      });
    }
  });

  console.log(currentUser);
  return (
    <>
      <section className='main-body'>Profile</section>
      <div>{currentUser.username}</div>
    </>
  );
}
