// import '@/styles/globals.css';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import axiosInstance from './utils/axiosInstance';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isInsideAdminRoute = router.asPath.startsWith('/Admin');
  const isInside404Route = router.asPath.startsWith('/404');
  const isInsideUserRoute = router.asPath.startsWith('/User');
  const isInsidePTRRoute = router.asPath.startsWith('/PTR');
  const isInsideLoginRoute = router.asPath.startsWith('/Login');
  const [token, setToken] = useState<any>('');
  const storedToken = Cookies.get('token');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState<any>('false');
  const [userRole, setUserRole] = useState<any>('');

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem('user'));
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.user === 'true') {
        try {
          setLoading(true);
          const response = await axiosInstance.get('/user/', {
            withCredentials: true,
          });

          if (response.status === 200) {
            const userData = response.data;
            setUser(userData);
            setLoading(false);
            if (userData.Role === 'admin') {
              setUserRole('admin');
            } else {
              setUserRole(userData.Role);
            }
          } else {
            setError('Unauthorized');
            setLoading(false);
          }
          // console.log('setUserRole', userRole);
        } catch (error) {
          setError('An error occurred');
          setLoading(false);
        }
      }
    }

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('token');
    sessionStorage.removeItem('token');
    setToken('');
    setUser(null);
    window.location.href = '/';
  };
  if (
    isInsideAdminRoute ||
    isInside404Route ||
    isInsideUserRoute ||
    isInsidePTRRoute ||
    isInsideLoginRoute
  ) {
    return children;
  } else {
    return (
      <>
        <Navbar
          loading={loading}
          token={token}
          storedToken={storedToken}
          user={user}
          error={error}
          handleLogout={handleLogout}
          userLoggedIn={userLoggedIn}
          userRole={userRole}
        />
        {children}
      </>
    );
  }
}
