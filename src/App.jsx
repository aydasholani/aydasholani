import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';
// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Admin from './routes/Admin';
import TestPage from './routes/TestPage';
import Error404 from './routes/Error404';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Users from './components/Users';
import User from './components/User';



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios
      .get("http://localhost:8080/v1/users")
      .then((response) => {
        console.log('response.data: ', response.data);
        console.log('response.data.data: ',response.data.data)
        setUsers(response.data.data)
        console.log('success')
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Failed");
      });
    };
  
    fetchData();
  }, []);
  console.log(users)
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
          <Route path="users" element={<Users users={users}/>}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='admin' element={<Admin />} />
          <Route path='test' element={<TestPage />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </Container>
    <Footer />

    </>
   
  );
}

export default App;
