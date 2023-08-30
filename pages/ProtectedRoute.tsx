import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useFetchUserData from './api/User/useFetchUserData';
import Cookies from 'js-cookie';
const ProtectedRoute = ({ allowedRoles, children }: any) => {
  const router = useRouter();
  const userData = useFetchUserData();
  const token = Cookies.get('token');

  return <>{children}</>;
};

export default ProtectedRoute;
