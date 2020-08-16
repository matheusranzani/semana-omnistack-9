import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SessionContext } from './context/Session';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

const AppStack = createStackNavigator();

export default function Routes() {
  const { isLoggedIn } = useContext(SessionContext);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoggedIn ? (
          <>
            <AppStack.Screen name="List" component={List} options={{ headerShown: false }} />
            <AppStack.Screen name="Book" component={Book} options={{ headerShown: false }} />
          </>
        ) : (
          <AppStack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
          }}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}