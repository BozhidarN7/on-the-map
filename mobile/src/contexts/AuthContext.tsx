import React, { useContext } from 'react';
import { LoginData, RegisterData } from '@app/components/forms/AuthForm/AuthTypes';

type AuthContextTypes = {
    signIn: (loginData: LoginData) => void;
    signUp: (registerData: RegisterData) => void;
};

const AuthContext = React.createContext<AuthContextTypes>({} as AuthContextTypes);

export const useAuth = () => useContext(AuthContext);

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const signUp = async (registerData: RegisterData) => {
        console.log(registerData);
    };

    const signIn = async (loginData: LoginData) => {
        console.log(loginData);
    };

    const value = { signUp, signIn };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
