import { createContext, ReactNode, useContext, useState } from 'react';

interface MyContextProps {
  setText: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: MyContextProps = {
  setText: () => {},
};

export const MyContext = createContext(defaultValue);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [, setText] = useState<boolean>(false);

  const contextValue: MyContextProps = {
    setText,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

// Custom hook to simplify context usage
export const useMyContext = () => {
  return useContext(MyContext);
};
