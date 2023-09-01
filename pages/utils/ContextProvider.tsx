import React, { useEffect, useState } from 'react';
export const GlobalContext = React.createContext({});

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(undefined);
  const getUserInfo = () => {
    const userString = localStorage.getItem('user');
    console.log(userString);
    const userInfo = JSON.parse(userString);
    return userInfo;
  };
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
