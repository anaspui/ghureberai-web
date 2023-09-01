import React, { ReactNode, createContext, useState } from 'react';

type TProvider = {
  children: ReactNode;
};

export const GlobalContext = createContext({});

function GlobalContextProvider({ children }: TProvider) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
