import React, {StyleSheet, View, Text, TextInput} from 'react-native';
import {useState} from 'react';
import Checkbox from 'expo-checkbox';

const RegisterScreen = () => {
    const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Register</Text>
            <TextInput
                style={[styles.inputField]}
                autoComplete="name"
                placeholder="First name"
            />
            <TextInput
                style={[styles.inputField]}
                autoComplete="name-family"
                placeholder="Last name"
            />
            <TextInput
                style={[styles.inputField]}
                autoComplete="email"
                placeholder="Email"
            />
            <TextInput
                style={[styles.inputField]}
                autoComplete="password"
                placeholder="Password"
            />
            <TextInput
                style={[styles.inputField]}
                autoComplete="password"
                placeholder="Repeat pasrsword"
            />
            <View style={styles.termsSection}>
                <Checkbox
                    style={styles.termsCheckbox}
                    value={agreeToTerms}
                    onValueChange={setAgreeToTerms}
                    color={agreeToTerms ? '#007BC7' : undefined}
                />
                <Text>I agree to the terms of service</Text>
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
    termsSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsCheckbox: {
        margin: 8,
    },
});

export default RegisterScreen;
