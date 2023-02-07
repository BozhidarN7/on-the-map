import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';

import { LoginData, RegisterData } from '@app/components/forms/AuthForm/AuthTypes';
import { CREATE_USER } from '@app/graphql/mutations';

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
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
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
