import React, { View, StyleSheet } from 'react-native';

import Text from '@app/components/common/Text';
import AuthForm from '@app/components/forms/AuthForm';

const LoginScreen = () => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Login</Text>
            <AuthForm type="login" />
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
});

export default LoginScreen;
