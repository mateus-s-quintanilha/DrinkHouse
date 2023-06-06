import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

import AuthProvider from './src/contexts';

export default function App() {

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}