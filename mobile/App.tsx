import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Toast from 'react-native-toast-message';

import AppNavigation from './src/navigations/AppNavigation';
import AuthProvider from '@app/contexts/AuthContext';
import client from '@app/config/apollo-client-config';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigation />
        <Toast />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
