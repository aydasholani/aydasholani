// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './routes/LandingPage';
import Nav2 from './components/Nav2';


function App() {
  return (
    <>
    {/* <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      > */}

      <Nav2 />
      {/* <Navbar /> */}
      <Header />
      <LandingPage />
      <Footer />
    {/* </ThemeProvider> */}
      </>
  );
}

export default App;
