import { createContext, Dispatch, SetStateAction } from 'react';
import { IUserInfo } from '../../../common/Models';

export interface IUserContext {
  user: IUserInfo | null;
  setUser: Dispatch<SetStateAction<IUserInfo | null>> | null;
  isLoading: boolean;
}

export const UserContext = createContext<IUserContext>({ user: null, setUser: null, isLoading: true });
