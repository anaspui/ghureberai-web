// import '@/styles/globals.css';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

// import axiosInstance from './utils/axiosInstance';

import { useRouter } from 'next/router';
import axios from 'axios';

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
  const [userRole, setUserRole] = useState<any>('');
  const randomData = {
    Username: 'anaspui',
    Email: 'omar34mf@gmail.com',
  };
  useEffect(() => {
    setUserLoggedIn(localStorage.getItem('user'));
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.user === 'true') {
        try {
          setLoading(true);
          const response = await axios.get(
            'https://ghureberai-api-production-9952.up.railway.app/user/',
            {
              withCredentials: true,
            }
          );
          setUserRole('admin');
          setUser(randomData as any);
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
          console.log('setUserRole', userRole);
        } catch (error) {
          setError('An error occurred');
          setLoading(false);
        }
      }
    }

    fetchUserData();
  }, []); // Only run once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('token');
    setToken('');
    setUser(null);
    window.location.href = '/';
  };
  if (isInsideAdminRoute || isInside404Route || isInsideUserRoute) {
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
          userLoggedIn={'true'}
          userRole={'admin'}
        />
        {children}
      </>
    );
  }
}
