import RoutesContainer from './components/RoutesContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <RoutesContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
