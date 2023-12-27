import './App.scss';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>

    </>
   
  );
}

export default App;
