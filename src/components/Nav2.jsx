import { useState } from 'react';
import Navigation from './Navigation';
import { HashLink } from 'react-router-hash-link';
import MyCV from "../files/ayda-sholani-cv.pdf";
import GithubIconLink from '../icons/GithubIconLink';
import LinkedInIconLink from '../icons/LinkedInIconLink';
import cv from '../assets/cv.svg'
import logo from '../assets/logo.svg'

export default function Nav2() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleClass = (itemName) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark sticky-top ">
      <div className="container">
        <HashLink
          className='navbar-brand'
          to="/#"
          scroll={(e) =>
            e.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <svg>
            <use xlinkHref={`${logo}#logo`}></use>
          </svg>
        </HashLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="col">
            <Navigation activeItem={activeItem} toggleClass={toggleClass} />
          </div>

          <span className="navbar-text social-media">
            <a href={MyCV} download="Ayda Sholani - CV.pdf">
            <svg>
              <use xlinkHref={`${cv}#cv`}></use>
            </svg>
          </a>
          <GithubIconLink />
          <LinkedInIconLink />
          </span>
        </div>
      </div>
    </nav>
  )
}
