import axios from 'axios';
import { TypeLogin, TypeRegister } from './types';
import { TypeApplication } from '../../server/types/types';

const PORT = process.env.PORT || 'http://localhost:3001';

async function login(user: TypeLogin) {
  return axios
    .post(PORT + '/user/login', JSON.stringify(user), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data.error);
}

async function register(user: TypeRegister) {
  return axios
    .post(PORT + '/user/register', JSON.stringify(user), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data.error);
}

async function getUser() {
  return axios
    .get(PORT + '/user/get-user', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data.error);
}

async function addApplication(application: TypeApplication, user_id: string) {
  return axios
    .post(
      PORT + '/application/create/' + user_id,
      JSON.stringify(application),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        withCredentials: true,
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data.error);
}

export { login, register, getUser, addApplication };
