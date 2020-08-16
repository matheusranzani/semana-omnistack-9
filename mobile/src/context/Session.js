import React, { createContext, useState, useEffect } from 'react';

import { AsyncStorage } from 'react-native';

import api from '../services/api';

export const SessionContext = createContext();

export default function SessionProvider({ children }) {
  const [isLoggedIn, setSession] = useState();

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setSession(user);
    });
  }, []);

  async function signIn(email, techs) {
    const response = await api.post('/sessions', {
      email
    });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    setSession(_id);
  }
  
  return (
    <SessionContext.Provider value={{ isLoggedIn, signIn }}>
      {children}
    </SessionContext.Provider>
  );
}