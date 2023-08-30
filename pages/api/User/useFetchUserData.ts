import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';
interface UserData {
  Role: string;
}
const useFetchUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.user === 'true') {
        try {
          const response = await axiosInstance({
            method: 'get',
            url: `/user/`,
            withCredentials: true,
          });
          if (response.status === 200) {
            setUserData(response.data);
          } else {
            console.log('Unauthorized');
          }
        } catch (error) {
          console.log('An error occurred');
        }
      }
    }

    fetchUserData();
  }, []); // No dependencies needed here since it's a one-time fetch

  return userData;
};

export default useFetchUserData;
