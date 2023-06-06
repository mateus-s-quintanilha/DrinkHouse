import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from '../../pages/Product';
import Home from '../../pages/Home';
import TopNav from '../../components/TopNav';

const Stack = createNativeStackNavigator()

export default function HomeAndProductRoute() {


    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{
                // headerShown: false
                header: props => <TopNav />
            }} />
            <Stack.Screen name='Product' component={Product} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}