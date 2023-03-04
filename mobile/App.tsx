import React from 'react';
import { ApolloProvider } from '@apollo/client';

import AppNavigation from './src/navigations/AppNavigation';
import AuthProvider from '@app/contexts/AuthContext';
import client from '@app/config/apollo-client-config';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
