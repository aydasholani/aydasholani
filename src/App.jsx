import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
