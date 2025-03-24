import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  return <ThemeContext.Provider {...props} value={[]} />;
}

function useTheme() {
  //the custom
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Hook is outside of Provider');
  return context; // actually giving us the value inside <ThemeContext.Provider>
}

export { ThemeProvider, useTheme };
