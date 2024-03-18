import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


import MyCV from "../files/ayda-sholani-cv.pdf";

import GithubIconLink from '../icons/GithubIconLink';
import LinkedInIconLink from '../icons/LinkedInIconLink';
import cv from '../assets/cv.svg'
import logo from '../assets/logo.svg'


export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleClass = (itemName) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };


  return (
      <nav>
        <div className="navbar-flex-wrapper">
          <div className="logo-wrapper">
            <HashLink
              to="/#"
              scroll={(e) =>
                e.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <svg>
                <use xlinkHref={`${logo}#logo`}></use>
              </svg>
            </HashLink>
          </div>

          <ul>
            <li>
              <HashLink 
                to="/#"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={activeItem === 'home' ? "active" : ""}
                onClick={() => toggleClass('home')}
              >
                Home
              </HashLink>
            </li>

            <li>
              <HashLink
                to="/#skills"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={activeItem === 'skills' ? "active" : ""}
                onClick={() => toggleClass('skills')}
              >
                Skills
              </HashLink>
            </li>

            <li>
              <HashLink 
                to="/#projects"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={activeItem === 'projects' ? "active" : ""}
                onClick={() => toggleClass('projects')}
              >
                Projects
              </HashLink>
            </li>

            <li>
              <HashLink 
                to="/#contact"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={activeItem === 'contact' ? "active" : ""}
                onClick={() => toggleClass('contact')}
              >
                Contact
              </HashLink>
            </li>

            <li>
              <HashLink 
                to="/#hobbies"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={activeItem === 'hobbies' ? "active" : ""}
                onClick={() => toggleClass('hobbies')}
              >
                Hobbies
              </HashLink>
            </li>

          </ul>

          <div className="social-media">
            <a 
              href={MyCV} 
              download="Ayda Sholani - CV.pdf"
            >
              <svg>
                <use xlinkHref={`${cv}#cv`}></use>
              </svg>
            </a>

            <GithubIconLink />
            
            <LinkedInIconLink />
          </div>
        </div>
      </nav>
  ) 

}
