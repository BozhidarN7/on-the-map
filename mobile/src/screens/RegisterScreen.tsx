import React, {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
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
                <Text>
                    I agree to the
                    <Text style={styles.termsLink}> terms of service</Text>
                </Text>
            </View>
            <TouchableHighlight
                style={styles.signUpButton}
                underlayColor="#0582ca"
                onPress={() => {}}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableHighlight>
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
    termsLink: {
        color: '#007BC7',
    },
    termsCheckbox: {
        margin: 8,
    },
    signUpButton: {
        backgroundColor: '#009cc7',
        width: '70%',
        borderRadius: 15,
        paddingVertical: 5,
        marginTop: 10,
    },
    signUpButtonText: {
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default RegisterScreen;
