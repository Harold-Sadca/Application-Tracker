'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import '../(css)/loginForm.css';
import { TypeLogin } from '@/utils/types';
import { login } from '@/utils/APIservices';

const initialState = {
  username: '',
  password: '',
};

export default function LoginForm() {
  const [formState, setFormState] = useState<TypeLogin>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(formState);
    setFormState(initialState);
  };

  return (
    <>
      <section className='main-body login'>
        <p className='header'>Login</p>
        <form className='input-container' onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            className='input'
            placeholder='username'
            name='username'
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type='password'
            className='input'
            placeholder='password'
            name='password'
            onChange={(e) => handleChange(e)}
            required
          />
          <button type='submit' className='btn-1'>
            Login
          </button>
          <p>Or follow the link to register</p>
        </form>
      </section>
    </>
  );
}
