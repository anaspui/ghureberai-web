import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import GlobalContextProvider from '@/context/GlobalContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = (pathname: string) => pathname.startsWith('/Admin');

  return (
    <GlobalContextProvider>
      <Layout>
        {isAdminRoute(router.pathname) ? (
          <ProtectedRoute allowedRoles={['admin', 'employee']}>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </GlobalContextProvider>
  );
}
