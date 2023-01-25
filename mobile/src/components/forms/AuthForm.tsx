import React, { StyleSheet } from 'react-native';

import Input from '@app/components/common/Input';

import { AUTH_TYPES } from './constants';

type Props = {
    type: 'login' | 'register';
};

const AuthForm = ({ type }: Props) => {
    return (
        <>
            <Input
                style={[styles.inputField]}
                autoComplete="name"
                placeholder="First name"
                show={type === AUTH_TYPES.REGISTER ? true : false}
            />
            <Input
                style={[styles.inputField]}
                autoComplete="name-family"
                placeholder="Last name"
                show={type === AUTH_TYPES.REGISTER ? true : false}
            />
            <Input
                style={[styles.inputField]}
                autoComplete="email"
                placeholder="Email"
            />
            <Input
                style={[styles.inputField]}
                autoComplete="password"
                placeholder="Password"
            />
            <Input
                style={[styles.inputField]}
                autoComplete="password"
                placeholder="Repeat pasrsword"
                show={type === AUTH_TYPES.REGISTER ? true : false}
            />
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
});

export default AuthForm;
