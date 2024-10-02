import { useState } from 'react';
import { Container, Navbar, Nav }from 'react-bootstrap';
import logo from '../assets/logo.svg'
import NavbarIcons from './NavbarIcons';
import { HashLink } from 'react-router-hash-link';

export default function MyNavbar() {
  const [active, setActive] = useState(null);

  const navItems = [
    { id: 'home', text: 'Home', link: '#' },
    { id: 'skills', text: 'Skills', link: '#skills' },
    { id: 'projects', text: 'Projects', link: '#projects' },
    // { id: 'contact', text: 'Contact', link: '#contact' },
  ];

  const handleSelect = (selectedId) => {
    setActive(selectedId);
  };

  return (
    <Navbar 
      id="navbar"
      collapseOnSelect 
      fixed="top" 
      expand="lg" 
      data-bs-theme="dark" 
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" title='Logo Link' aria-label='Logo link'>
          <svg>
            <use xlinkHref={`${logo}#logo`}></use>
          </svg>
        </Navbar.Brand>

        {/* Hamburger meny-icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links to sections */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={active} onSelect={handleSelect} className='m-auto'>
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <HashLink 
                  to={item.link} 
                  className={`nav-link ${active === item.id ? 'active' : ''}`}
                  onClick={() => handleSelect(item.id)}
                >
                  {item.text}
                </HashLink>
                {/* <Nav.Link href={item.link} eventKey={item.link}>hello</Nav.Link> */}
              </Nav.Item>
            ))}
          </Nav>

          {/* CV, GitHub, LinkedIn icon-links */}
          <NavbarIcons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
