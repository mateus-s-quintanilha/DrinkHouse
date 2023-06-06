import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes() {
 return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
    }}>

        <AuthStack.Screen name='Login' component={Login} />
        <AuthStack.Screen name='Register' component={Register} />

    </AuthStack.Navigator>
  );
}