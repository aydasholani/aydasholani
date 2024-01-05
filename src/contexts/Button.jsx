import { useContext } from 'react';
import { ThemeContext, AuthContext } from './Contexts.js';

function ThemeButton() {
  const theme = useContext(ThemeContext);
  // ...
}

function AuthButton() {
  const auth = useContext(AuthContext)
}