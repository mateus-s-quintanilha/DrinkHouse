import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import TopNav from '../components/TopNav';

import HomeAndProductRoute from './AppRoute/home-product.routes';

const Drawer = createDrawerNavigator()

export default function AppRoutes() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition: 'right',
      // headerShown: false,
      // header: props => <TopNav />
    }}>
      {/* <Drawer.Screen name='Home' component={Home} /> */}

      <Drawer.Screen name='HomeProductRoute' component={HomeAndProductRoute} options={{
        headerShown: false,
        title: 'Home'
      }}/>
      
      <Drawer.Screen name='Profile' component={Profile} options={{
        header: props => <TopNav />
      }} />

    </Drawer.Navigator>
  );
}