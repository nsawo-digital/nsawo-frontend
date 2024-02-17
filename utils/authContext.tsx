import { User } from '@/types/User';
import {useEffect, createContext, useContext, useState } from 'react';

interface contextProps {
    authUser?: User | null;
    setCurrentUser?: any;
    unsetCurrentUser?: any;
}

const AuthContext = createContext<contextProps>({});
export const AuthProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  const setCurrentUser = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setAuthUser(userData);
  };

  const unsetCurrentUser = () => {
    setAuthUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authUser, setCurrentUser, unsetCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};