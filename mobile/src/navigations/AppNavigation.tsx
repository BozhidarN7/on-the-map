import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';

import MapScreen from '@app/screens/MapScreen';
import RegisterScreen from '@app/screens/RegisterScreen';
import LoginScreen from '@app/screens/LoginScreen';

type RootStackParamList = {
    Map: undefined;
    Register: undefined;
    Login: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
