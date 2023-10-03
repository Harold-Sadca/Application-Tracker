import axios from 'axios';
import { TypeLogin, TypeRegister } from './types';
import { TypeApplication, TypeInterview } from '../../server/types/types';

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
    .catch((error) => error.response.data);
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
    .catch((error) => error.response.data);
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
    .catch((error) => console.log(error.response.data));
}

async function logout() {
  return axios
    .delete(PORT + '/user/logout', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data);
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
    .catch((error) => error.response.data);
}

async function addInterview(interview: TypeInterview, application_id: string) {
  return axios
    .post(
      PORT + '/interview/create/' + application_id,
      JSON.stringify(interview),
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
    .catch((error) => error.response.data);
}

async function updateApplicationStatus(
  application: Object,
  application_id: string
) {
  return axios
    .put(
      PORT + '/application/update/' + application_id,
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
    .catch((error) => error.response.data);
}

async function updateInterviewResult(result: Object, interview_id: string) {
  return axios
    .put(PORT + '/interview/update/' + interview_id, JSON.stringify(result), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data);
}

export {
  login,
  register,
  getUser,
  addApplication,
  addInterview,
  updateInterviewResult,
  updateApplicationStatus,
  logout,
};
