import './App.css';
import RoutesContainer from './components/RoutesContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ayda Sholani</h1>
      </header>
      <Navbar />
      <main>
        <RoutesContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
