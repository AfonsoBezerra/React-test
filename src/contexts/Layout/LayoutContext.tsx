import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@components/Header';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@globalStyles/themes/default';
import { GlobalStyles } from '@globalStyles';

export const LayoutContext = createContext({});

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(!location.pathname.includes('/dashboard'));
  }, [location]);

  const contextValues = useMemo(() => ({}), []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles.ColorsCSS />
      <GlobalStyles.FontsCSS />
      <GlobalStyles.RootCSS />

      <LayoutContext.Provider value={contextValues}>
        <Header isHome={isHome} />
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
