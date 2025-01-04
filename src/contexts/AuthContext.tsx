import { createContext, useContext, useState, ReactNode } from 'react';
import { router } from 'expo-router';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    register: (token: string) => void;
    forgotPassword: (email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token: string) => {
        setIsAuthenticated(true);
        // Store token in secure storage here
        router.replace('/(tabs)');
    };

    const register = (token: string) => {
        setIsAuthenticated(true);
        // Store token in secure storage here
        router.replace('/(tabs)');
    };

    const forgotPassword = (email: string) => {
        console.log('Forgot password for email:', email);
    };

    const logout = () => {
        setIsAuthenticated(false);
        // Clear token from secure storage here
        router.replace('/auth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, register, forgotPassword, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 