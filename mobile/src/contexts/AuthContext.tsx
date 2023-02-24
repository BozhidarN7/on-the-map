import React, { useContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useMutation } from '@apollo/client';

import { LoginData, RegisterData } from '@app/components/forms/AuthForm/AuthTypes';
import { CREATE_USER } from '@app/graphql/mutations';

type AuthContextTypes = {
  isSignIn: boolean;
  signIn: (loginData: LoginData) => void;
  signUp: (registerData: RegisterData) => void;
};

const AuthContext = React.createContext<AuthContextTypes>({} as AuthContextTypes);

export const useAuth = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (!loading && data) {
      setIsSignIn(true);
    }
  }, [data, loading]);

  const signUp = async (registerData: RegisterData) => {
    const result = await auth().createUserWithEmailAndPassword(
      registerData.email,
      registerData.password,
    );
    console.log(result);
    // createUser({ variables: registerData });
  };

  const signIn = async (loginData: LoginData) => {
    console.log(loginData);
  };

  const value = { isSignIn, signIn, signUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
