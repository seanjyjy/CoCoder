import axios, { AxiosResponse } from 'axios';
import { IUserDTO } from '../../../common/Models';

const URI_USER_SVC = process.env.URI_USER_SVC || 'http://localhost:8000';

const PREFIX_USER_SVC = '/api/user';

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

export const userSignUp = (user: IUserDTO) => {
  return axios.post<string, AxiosResponse, IUserDTO>(URL_USER_SVC, user);
};

export const getCurrentUser = () => {
  return axios.get(URL_USER_SVC, { withCredentials: true });
};

export const userLogin = (user: IUserDTO) => {
  return axios.post(URL_USER_SVC + '/login', user, { withCredentials: true });
};

export const userLogout = () => {
  return axios.get(URL_USER_SVC + '/logout');
};
