import { iUser, iUserToken } from 'types/iUser';

export interface iAuthContext {
  user: iUser | null;
  loading: boolean;
  signIn: (
    credentials: { email: string; password: string },
    redirect?: string,
  ) => Promise<iUserToken>;
  logout: () => Promise<string>;
}
