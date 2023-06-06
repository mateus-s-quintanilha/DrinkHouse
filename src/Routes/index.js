import React, { useContext } from 'react';
import { View } from 'react-native';

import AuthRoutes from './auth.routes';

import { AuthContext } from '../contexts';
import AppRoutes from './app.routes';

export default function Routes() {

  const { signed } = useContext(AuthContext)

  if(signed == true) {
    return (
      <AppRoutes />
    );
  } else {
    return (
      <AuthRoutes />
    );
  }
}