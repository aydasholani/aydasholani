import { useState } from 'react';
import { Container, Navbar, Nav }from 'react-bootstrap';
import logo from '../assets/logo.svg'
import NavbarIcons from './NavbarIcons';

export default function MyNavbar() {
  const [active, setActive] = useState(null);

  const navItems = [
    { id: 'home', text: 'Home', link: '/#' },
    { id: 'skills', text: 'Skills', link: '/#skills' },
    { id: 'projects', text: 'Projects', link: '/#projects' },
    { id: 'hobbies', text: 'Hobbies', link: '/#hobbies' },
    { id: 'contact', text: 'Contact', link: '/#contact' },
  ];

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" data-bs-theme="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <svg>
            <use xlinkHref={`${logo}#logo`}></use>
          </svg>
        </Navbar.Brand>

        {/* Hamburger meny-icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links to sections */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)} className='m-auto'>
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link href={item.link} eventKey={item.link}>
                  {item.text}
                </Nav.Link>
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
