import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './context/users.context.jsx';
import { ThemeProvider } from './context/theme.context.jsx';

const theme = {
  favorite: 'steelblue',
};

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <App>
        <p>Janine</p>
      </App>
    </ThemeProvider>
  </UserProvider>
);

//ThemeProvider
//UserProvider go here
// <UserProvider pa="janine">  UserProvider({pa: 'janine', children: [ThemeProvider, App]})
