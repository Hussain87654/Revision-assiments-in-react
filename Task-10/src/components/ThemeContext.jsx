import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 1. Create the Context
const ThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  // 2. Toggle Function
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // 3. Create MUI Theme based on state
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>
        {/* CssBaseline kicks off MUI's dark mode global styles */}
        <CssBaseline />
        <div className={mode === 'dark' ? 'dark' : ''}>
          {children}
        </div>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

// 4. Custom Hook for easy access
export const useThemeContext = () => useContext(ThemeContext);