'use client';
import { usePathname } from 'next/navigation';
import '../(css)/navbar.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Navbar() {
  const path = usePathname().slice(1).toLocaleUpperCase();
  // const currentUser = useSelector(
  //   (state: RootState) => state.currentUserReducer.value
  // );

  return (
    <div className='nav-container'>
      <h1 className='page-title'>{path}</h1>
      {/* <h3>{currentUser.username}</h3> */}
    </div>
  );
}
