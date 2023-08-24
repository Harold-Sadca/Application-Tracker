import axios from 'axios';
import { TypeLogin } from './types';

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

export { login };
