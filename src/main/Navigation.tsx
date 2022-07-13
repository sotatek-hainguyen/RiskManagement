import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../welcome/WelcomeScreen';
import AuthScreen from '../auth/AuthScreen';
import {NavigationContainerRef} from '@react-navigation/native';
import {mainRoutes} from './mainRoutes';

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={mainRoutes.Welcome}>
      <Stack.Screen
        name={mainRoutes.Welcome}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={mainRoutes.Auth}
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const navigationService = {
  navigation: {} as NavigationContainerRef<RootStackParamList>,
  init: (navigation: NavigationContainerRef<RootStackParamList>) =>
    (navigationService.navigation = navigation),
};
