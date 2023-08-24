'use client';
import '../(css)/loginForm.css';

export default function LoginForm() {
  return (
    <>
      <section className='main-body login'>
        <p className='header'>Login</p>
        <form className='input-container'>
          <input
            type='text'
            className='input'
            placeholder='username'
            required
          />
          <input
            type='password'
            className='input'
            placeholder='password'
            required
          />
          <button type='submit' className='btn-1'>
            Login
          </button>
          <button type='submit' className='btn-1'>
            Register
          </button>
        </form>
      </section>
    </>
  );
}
