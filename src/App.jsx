import './App.scss';
import RoutesContainer from './components/RoutesContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <RoutesContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
