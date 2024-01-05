import './App.scss';
// import { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import { Container } from 'react-bootstrap';

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Admin from './routes/Admin';
// import TestPage from './routes/TestPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { ThemeContext, AuthContext } from './contexts/Contexts';


function App() {
  // const [theme, setTheme] = useState('dark');
  // const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });

  return (
    <>
    <header>
      <Navbar />
    </header>

    <Container className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/test" element={
          <ThemeContext.Provider value={theme}>
            <AuthContext.Provider value={currentUser}>
              <TestPage props={currentUser}/>
            </AuthContext.Provider>
          </ThemeContext.Provider>
          } 
        /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Container>
    <Footer />

    </>
   
  );
}

export default App;
