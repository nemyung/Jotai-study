import React from 'react';
import ReactDOM from 'react-dom/client';
import Pages from './pages';
import './styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { queryClientAtom } from 'jotai/query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <Provider initialValues={[[queryClientAtom, queryClient]]}>
        <Pages />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
