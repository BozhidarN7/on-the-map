import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import MapScreen from '@app/screens/MapScreen';
import RegisterScreen from '@app/screens/RegisterScreen';
import LoginScreen from '@app/screens/LoginScreen';
import { useAuth } from '@app/contexts/AuthContext';
import { Button } from 'react-native';

type RootStackParamList = {
  Map: undefined;
  Register: undefined;
  Login: undefined;
};

export type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const { userData, logout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerRight: () => <Button onPress={logout} title="Logout" />,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ animationTypeForReplace: 'push' }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ animationTypeForReplace: 'push' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
