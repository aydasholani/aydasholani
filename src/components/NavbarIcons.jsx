import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import cv from '../assets/cv.svg'
import MyCV from "../files/ayda-sholani-cv.pdf";
import { Nav } from 'react-bootstrap';

export default function NavbarIcons() {
  return (
    <Nav className='social-media'>
      {/* Cv download */}
      <Nav.Item>
        <Nav.Link href={MyCV} download="Ayda Sholani - CV.pdf">
          <svg>
            <use xlinkHref={`${cv}#cv`}></use>
          </svg>
        </Nav.Link>
      </Nav.Item>

      {/* Github */}
      <Nav.Item>
        <Nav.Link href="https://github.com/aydasholani" target='_blank'>
          <AiOutlineGithub />
        </Nav.Link>
      </Nav.Item>

      {/* Linkedin */}
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/ayda-s-a2b663200" target='_blank'>
          <AiOutlineLinkedin />
        </Nav.Link>
      </Nav.Item> 
    </Nav>
  )
}
