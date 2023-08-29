import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import ContextProvider from './utils/ContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = (pathname: string) => pathname.startsWith('/Admin');

  return (
    <ContextProvider>
      <Layout>
      {isAdminRoute(router.pathname) ? (
        <ProtectedRoute allowedRoles={['admin', 'employee', 'customer']}>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
    </ContextProvider>
  );
}
