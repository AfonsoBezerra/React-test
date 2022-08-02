import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routers } from '@pages/routers';

import './services/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
