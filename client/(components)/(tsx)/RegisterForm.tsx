import { ChangeEvent, FormEvent, useState } from 'react';
import '../(css)/loginForm.css';
import { TypeLogin, TypeRegister } from '@/utils/types';
import { register } from '@/utils/APIservices';
import { useDispatch } from 'react-redux';
import { setLoginState } from '@/redux/features/registerSlice';

const initialState = {
  username: '',
  password: '',
  email: '',
};

export default function RegisterForm() {
  const [formState, setFormState] = useState<TypeRegister>(initialState);
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
    const user = await register(formState);
    setFormState(initialState);
  };

  const handleLogin = () => {
    dispatch(setLoginState(false));
  };

  return (
    <>
      <section className='main-body login'>
        <p className='header'>Register</p>
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
            type='email'
            className='input'
            placeholder='email'
            name='email'
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
            Register
          </button>
          <div>
            <p>Or click the button bellow to login</p>
            <button type='button' className='btn-1' onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
