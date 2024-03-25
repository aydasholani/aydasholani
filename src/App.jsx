import MyFooter from './components/MyFooter';
import Header from './components/Header';
import LandingPage from './routes/LandingPage';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >

      <Header />
      <LandingPage />
      <MyFooter />
    </ThemeProvider>
  );
}

export default App;
