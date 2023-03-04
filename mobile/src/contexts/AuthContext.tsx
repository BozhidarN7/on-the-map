import React, { useContext, useState, useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import { useMutation } from '@apollo/client';

import { LoginData, RegisterData } from '@app/components/forms/AuthForm/AuthTypes';
import { REGISTER } from '@app/graphql/mutations';

type AuthContextTypes = {
  logout: () => void;
  signIn: (loginData: LoginData) => void;
  signUp: (registerData: RegisterData) => void;
  userData: any;
};

const AuthContext = React.createContext<AuthContextTypes>({} as AuthContextTypes);

export const useAuth = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [initializing, setInitializing] = useState(true);
  const [userData, setUserData] = useState();

  const [register, { error }] = useMutation(REGISTER);
  if (error) {
    console.log('graphq: ', error);
  }
  const onAuthStateChanged = useCallback(
    (user: any) => {
      setUserData(user);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  const signUp = async (registerData: RegisterData) => {
    await auth().createUserWithEmailAndPassword(registerData.email, registerData.password);
    register({
      variables: {
        registerData: { ...registerData, password: undefined, repeatPassword: undefined },
      },
    });
  };

  const signIn = async (loginData: LoginData) => {
    await auth().signInWithEmailAndPassword(loginData.email, loginData.password);
  };

  const logout = async () => {
    await auth().signOut();
  };

  const value = { userData, logout, signIn, signUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
