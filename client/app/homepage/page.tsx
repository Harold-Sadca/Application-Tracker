'use client';

import LoginForm from '@/(components)/LoginForm';

export default function Home() {
  return (
    <main>
      <div className='main-body'>
        <h1 className='header'>Homepage</h1>
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
