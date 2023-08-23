import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useFetchUserData from './api/User/useFetchUserData';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const router = useRouter();
  const userData = useFetchUserData();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      router.push('/404');
    } else if (!userData) {
      router.push('/login');
    } else if (!allowedRoles.includes(userData.Role)) {
      router.push('/404');
    }
  }, [token, userData, allowedRoles, router]);

  if (!userData || !allowedRoles.includes(userData.Role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
