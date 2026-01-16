import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  role: 'user' | 'admin';
  login: (roleType?: 'user' | 'admin') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check localStorage for persisted session
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('auth_token') === 'mock_token';
  });

  const [role, setRole] = useState<'user' | 'admin'>(() => {
    return (localStorage.getItem('auth_role') as 'user' | 'admin') || 'user';
  });

  const login = (roleType: 'user' | 'admin' = 'user') => {
    localStorage.setItem('auth_token', 'mock_token');
    localStorage.setItem('auth_role', roleType);
    setIsAuthenticated(true);
    setRole(roleType);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_role');
    setIsAuthenticated(false);
    setRole('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};