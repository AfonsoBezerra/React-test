import { decodeToken } from 'react-jwt';
export const jwt = {
  decode: <T>(token: string) => decodeToken(token) as T,
};
