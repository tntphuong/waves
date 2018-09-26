import axios from 'axios';

import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

import { USER_SERVER } from '../components/utils/misc';

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then(res => res.data);

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(res => res.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function auth(dataToSubmit) {
  const request = axios
    .get(`${USER_SERVER}/auth`, dataToSubmit)
    .then(res => res.data);

  return {
    type: AUTH_USER,
    payload: request
  };
}
