import React, { View, StyleSheet, TouchableHighlight } from 'react-native';

import Text from '@app/components/common/Text';
import AuthForm from '@app/components/forms/AuthForm/AuthForm';

import { LoginProps } from '@app/navigations/AppNavigation';

const LoginScreen = ({ navigation }: LoginProps) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Login</Text>
            <AuthForm type="login" />
            <View style={styles.signInContainer}>
                <Text>Do not have an account? </Text>
                <TouchableHighlight onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signInText}>Sign Up.</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    formTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    signInContainer: {
        flexDirection: 'row',
    },
    signInText: {
        color: '#007BC7',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
