import React, { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

import { RegisterProps } from '@app/navigations/AppNavigation';
import AuthForm from '@app/components/forms/AuthForm/AuthForm';

const RegisterScreen = ({ navigation }: RegisterProps) => {
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Register</Text>
      <AuthForm type="register" />
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
      <View style={styles.signInContainer}>
        <Text>Already have an account? </Text>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Sign In.</Text>
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
  termsSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsLink: {
    color: '#007BC7',
    textDecorationLine: 'underline',
  },
  termsCheckbox: {
    margin: 8,
  },
  signInContainer: {
    flexDirection: 'row',
  },
  signInText: {
    color: '#007BC7',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
