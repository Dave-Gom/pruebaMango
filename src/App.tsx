import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import AppRouter from './router/AppRouter';
import ThemeProvider from './theme/ThemeProvider';

const App = () => {
  useLayoutEffect(() => {
    return () => {};
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
