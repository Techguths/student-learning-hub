import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from '@/types/student';
import { mockStudent } from '@/data/mockData';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  student: Student | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
      setStudent(mockStudent);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    if (email && password.length >= 6) {
      localStorage.setItem('auth_token', 'mock_token');
      setIsAuthenticated(true);
      setStudent(mockStudent);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, student, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
