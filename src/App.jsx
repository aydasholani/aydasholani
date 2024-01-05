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
import TestPage from './routes/TestPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';



function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <Container className='main'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='admin' element={<Admin />} />
          <Route path='test' element={<TestPage />} />
        </Route>
      </Routes>
    </Container>
    <Footer />

    </>
   
  );
}

export default App;
