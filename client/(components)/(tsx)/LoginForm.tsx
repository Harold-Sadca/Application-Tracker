'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import '../(css)/loginForm.css';
import { TypeLogin } from '@/utils/types';
import { login } from '@/utils/APIservices';
import { useDispatch } from 'react-redux';
import { setLoginState } from '@/redux/features/registerSlice';
import { loginUser } from '@/redux/features/currentUserSlice';

const initialState = {
  username: '',
  password: '',
};

export default function LoginForm() {
  const [formState, setFormState] = useState<TypeLogin>(initialState);
  const dispatch = useDispatch();

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
    dispatch(loginUser(user));
    setFormState(initialState);
  };

  const handleRegister = () => {
    dispatch(setLoginState(true));
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
          <div>
            <p>Or click the button bellow to register</p>
            <button type='button' className='btn-1' onClick={handleRegister}>
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
