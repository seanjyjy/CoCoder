import axios, { AxiosResponse } from 'axios';
import { URL_USER_SVC } from '../configs';
import { IUserDTO } from '../../../common/Models';

export const getCurrentUser = () => {
  console.log(URL_USER_SVC);
  return axios.get(URL_USER_SVC + '/auth', { withCredentials: true });
};

export const userSignUp = (user: IUserDTO) => {
  return axios.post<string, AxiosResponse, IUserDTO>(URL_USER_SVC + '/user', user);
};

export const userLogin = (user: IUserDTO) => {
  return axios.post(URL_USER_SVC + '/login', user, { withCredentials: true });
};

export const userLogout = () => {
  return axios.get(URL_USER_SVC + '/logout');
};

export const viewUserPublicInfo = (username: string) => {
  return axios.get(URL_USER_SVC + `/user/${username}`);
};

export const editCurrentUser = (username: string, fields: any) => {
  return axios.put(URL_USER_SVC + `/user/${username}`, fields, { withCredentials: true });
};

export const userDelete = (username: string) => {
  return axios.delete(URL_USER_SVC + `/user/${username}`, { withCredentials: true });
};
