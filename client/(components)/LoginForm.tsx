'use client';
import Image from 'next/image';

export default function LoginForm() {
  return (
    <>
      <section className='main-body'>
        <p>Login</p>
        <form>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' required />
        </form>
      </section>
    </>
  );
}
