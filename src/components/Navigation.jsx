import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Navigation({ activeItem, toggleClass }) {
  const navItems = [
    { id: 'home', text: 'Home', link: '/#' },
    { id: 'skills', text: 'Skills', link: '/#skills' },
    { id: 'projects', text: 'Projects', link: '/#projects' },
    { id: 'contact', text: 'Contact', link: '/#contact' },
    { id: 'hobbies', text: 'Hobbies', link: '/#hobbies' }
  ];

  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
      {navItems.map((item) => (
        <li key={item.id} className='nav-item'>
          <HashLink 
            to={item.link}
            scroll={(e) =>
              e.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`nav-link {activeItem === item.id ? "active" : ""}`}
            onClick={() => toggleClass(item.id)}
            aria-current={activeItem === item.id ? "page" : undefined}
          >
            {item.text}
          </HashLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;