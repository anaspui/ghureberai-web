// import '@/styles/globals.css';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import axiosInstance from './utils/axiosInstance';

export default function Layout({ children }: { children: React.ReactNode }) {
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
            headers: { cookie: storedToken },
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
      />
      {children}
    </>
  );
}
