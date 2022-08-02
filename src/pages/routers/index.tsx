import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { AuthProvider } from '@contexts/Auth';
import { LayoutProvider } from '@contexts/Layout';

import { Home } from '@pages/Home';
import { Dashboard } from '@pages/Dashboad';
import { Event } from '@pages/Event';
import { NotFound } from '@pages/NotFound';
import { getCookie } from '@services/cookie';

interface PrivateRouterProps {
  element: React.ReactNode;
  redirect?: string;
}

const PrivateRouter = ({ element, redirect }: PrivateRouterProps) => {
  const token = getCookie(import.meta.env.VITE_AUTH_COOKIE);

  return (
    <>
      {token ? element : !redirect ? <NotFound /> : <Navigate to={redirect} />}
    </>
  );
};

export const Routers = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        maxSnack={2}
      >
        <AuthProvider>
          <LayoutProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={<PrivateRouter element={<Dashboard />} redirect="/" />}
              />
              <Route
                path="/dashboard/event"
                element={
                  <PrivateRouter element={<Event />} redirect="/dashboard" />
                }
              />
              <Route
                path="/dashboard/event/:id"
                element={<PrivateRouter element={<Event />} />}
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </LayoutProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};
