import React, {useState} from 'react';
import {MD3Theme, PaperProvider} from 'react-native-paper';
import {LightTheme} from './LightTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [currentTheme, _] = useState<MD3Theme>(LightTheme);

  return <PaperProvider theme={currentTheme}>{children}</PaperProvider>;
};

export default ThemeProvider;
