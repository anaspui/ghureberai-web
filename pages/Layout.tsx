// import '@/styles/globals.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ContextProvider from './utils/ContextProvider';
import axiosInstance from './utils/axiosInstance';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isInsideAdminRoute = router.asPath.startsWith('/Admin');
  const isInside404Route = router.asPath.startsWith('/404');
  const isInsideUserRoute = router.asPath.startsWith('/User');

  const [token, setToken] = useState<any>('');
  const storedToken = Cookies.get('token');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState<any>('false');

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem('user'));
  }, [token]);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.user == 'true') {
        setToken(storedToken);
        try {
          setLoading(true);
          // TODO: need to fix error: xhr.js:200 Refused to set unsafe header "cookie"
          const response = axiosInstance({
            method: 'get',
            url: `/user/`,
            withCredentials: true,
          });

          if ((await response).status === 200) {
            setUser((await response).data);
            setLoading(false);
          } else {
            setError('Unauthorized');
            setLoading(false);
          }
        } catch (error) {
          setError('An error occurred');
          setLoading(false);
        }
      }
    }
    fetchUserData();
  }, [token, loading, userLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('token');
    setToken('');
    setUser(null);
  };
  if (isInsideAdminRoute || isInside404Route || isInsideUserRoute) {
    return children;
  } else {
    return (
      <ContextProvider>
        <>
        <Navbar
          loading={loading}
          token={token}
          storedToken={storedToken}
          user={user}
          error={error}
          handleLogout={handleLogout}
          userLoggedIn={userLoggedIn}
        />
        {children}
      </>
      </ContextProvider>
    );
  }
}
