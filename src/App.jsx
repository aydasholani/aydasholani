import './App.css';
import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';

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
    </div>
  );
}

export default App;
