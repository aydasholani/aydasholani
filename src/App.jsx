import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './routes/LandingPage';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
