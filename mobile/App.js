// Por padrão o RN usa display: 'flex' e flexDirection: 'column'

import React from 'react';

import SessionProvider from './src/context/Session';

import Routes from './src/routes';

export default function App() {
  return (
    <SessionProvider>
      <Routes />
    </SessionProvider>
  );
};