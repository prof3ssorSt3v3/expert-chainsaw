import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(props.theme);

  return <ThemeContext.Provider {...props} value={[theme]} />;
}

function useTheme() {
  //the custom
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Hook is outside of Provider');
  return context; // actually giving us the value inside <ThemeContext.Provider>
}

export { ThemeProvider, useTheme };
