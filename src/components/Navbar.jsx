
// import { HashLink } from "react-router-dom"
import SocialsIcons from '../icons/SocialsIcons'
import Logo from '../logo.png'
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav>
      <div>
        <HashLink smooth to="#">
          <img src={Logo} alt="logo" height={50} />
        </HashLink>
      </div>

      <div className='nav-links'>
        <HashLink smooth to="#">
          Home
        </HashLink>
        <HashLink to="#about" 
          scroll={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          About
        </HashLink>
        <HashLink to="#skills"
          scroll={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          Skills
        </HashLink>
        <HashLink to="#work"
          scroll={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          work  
        </HashLink>
        <HashLink 
          to="#contact"
          scroll={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >contact</HashLink>
      </div>

      <SocialsIcons />

    </nav>
  )
}
