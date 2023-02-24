import React, { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { useState } from 'react';

import Input from '@app/components/common/Input';

import { AUTH_TYPES } from './constants';
import { useAuth } from '@app/contexts/AuthContext';

type Props = {
  type: 'login' | 'register';
};

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const AuthForm = ({ type }: Props) => {
  const { signUp } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  const isRegisterType = type === AUTH_TYPES.REGISTER;

  const onInputChange = (value: string, name?: string) =>
    setFormState((prev) => ({ ...prev, ...(name && { [name]: value }) }));

  const handleSignUp = () => {
    signUp(formState);
  };

  const handleSignIn = () => [];

  return (
    <>
      <Input
        autoComplete="name"
        name="firstName"
        onChangeText={onInputChange}
        placeholder="First name"
        show={type === AUTH_TYPES.REGISTER ? true : false}
        style={[styles.inputField]}
        value={formState.firstName}
      />
      <Input
        autoComplete="name-family"
        name="lastName"
        onChangeText={onInputChange}
        placeholder="Last name"
        show={isRegisterType}
        style={[styles.inputField]}
        value={formState.lastName}
      />
      <Input
        autoComplete="email"
        name="email"
        onChangeText={onInputChange}
        placeholder="Email"
        style={[styles.inputField]}
        value={formState.email}
      />
      <Input
        autoComplete="password"
        name="password"
        onChangeText={onInputChange}
        placeholder="Password"
        style={[styles.inputField]}
        value={formState.password}
        rest={{ secureTextEntry: true }}
      />
      <Input
        autoComplete="password"
        name="repeatPassword"
        onChangeText={onInputChange}
        placeholder="Repeat pasrsword"
        show={isRegisterType}
        style={[styles.inputField]}
        value={formState.repeatPassword}
        rest={{ secureTextEntry: true }}
      />
      <TouchableHighlight
        style={styles.signUpButton}
        underlayColor="#0582ca"
        onPress={isRegisterType ? handleSignUp : handleSignIn}>
        <Text style={styles.signUpButtonText}>{isRegisterType ? 'Sign Up' : 'Sign In'}</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '70%',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#007bc7',
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 15,
  },
  signUpButton: {
    backgroundColor: '#009cc7',
    width: '70%',
    borderRadius: 15,
    paddingVertical: 5,
    marginVertical: 10,
  },
  signUpButtonText: {
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default AuthForm;
