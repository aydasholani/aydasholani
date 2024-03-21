import Footer from './components/Footer';
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
