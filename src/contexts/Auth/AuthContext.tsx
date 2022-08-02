import type { iUser, iUserResponse, iUserToken } from 'types/iUser';

import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useSnackbar } from 'notistack';

import { cookie } from '@services/cookie';
import { jwt } from '@services/jwt';
import { fetcher } from '@services/fetcher';

import type { iAuthContext } from './iAuthContext';

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

const formateUser: (user: iUserResponse) => iUser = (user) => ({
  id: user.usr.id,
  name: user.usr.nome,
  email: user.usr.email,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const cookieAuthName = import.meta.env.VITE_AUTH_COOKIE;
  // ------------------==------------------ //
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);

  async function setSession(session: string | null) {
    if (session) {
      // const second = 1 / 24 / 60 / 60;
      const hasCookie = !!cookie.get(cookieAuthName);

      const userResponse = jwt.decode<iUserResponse>(session);
      const expHours = new Date(userResponse.exp).getHours();

      if (!hasCookie) {
        cookie.set(cookieAuthName, session, {
          path: '/',
          expires: (1 / 24) * expHours, // expHours hour
        });
      }
    } else cookie.del(cookieAuthName);
  }
  async function handleUser(userJwt: iUserToken) {
    if (userJwt) {
      await setSession(userJwt.token);
      setUser(formateUser(jwt.decode<iUserResponse>(userJwt.token)));
      return userJwt.token;
    }

    await setSession(null);
    return null;
  }

  const signIn: iAuthContext['signIn'] = async (credentials, redirect) => {
    try {
      setLoading(true);

      return fetcher
        .post(`${import.meta.env.VITE_BASE_URL}/login/adm`, {
          email: credentials.email,
          password: credentials.password,
        })
        .then(async (res: iUserToken) => {
          await handleUser(res);
          if (redirect) navigate(redirect);
          return res;
        })
        .catch((res) => {
          enqueueSnackbar(t('alert.errorCredentials'), {
            variant: 'error',
          });
          throw res;
        });
    } finally {
      setLoading(false);
    }
  };
  const logout: iAuthContext['logout'] = async () => {
    try {
      await setSession(null);
      navigate('/');
      return 'logout';
    } finally {
      // Do Something
    }
  };

  useEffect(() => {
    const userToken = cookie.get(cookieAuthName);

    if (userToken) {
      handleUser({ token: userToken });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (user && window.location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [user]);

  const contextValues = useMemo(
    () => ({ user, loading, signIn, logout }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
