import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import AuthProvider from '@app/contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    );
}

export default App;
