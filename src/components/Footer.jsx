import React from "react";
import { HashLink } from "react-router-hash-link";

import GithubIconLink from '../icons/GithubIconLink';
import LinkedInIconLink from '../icons/LinkedInIconLink';
import SmallLogo from '../assets/small-logo.svg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>Email: ayda.sholani@gmail.com</p>
          <p>Phone: +46707479001</p>
          <p>Address: Stockholm, Sweden</p>
        </div>

        <div className="social-media">
          <h3>Follow me</h3>
          <li>
          <a 
            href="https://github.com/aydasholani" 
            rel="noreferrer noopener" 
            target="_blank" 
            aria-label="Visit my GitHub"
          >
            Github             <GithubIconLink size={20} />
       
          </a>
          </li>
          <li>
          <a 
          href="https://www.linkedin.com/in/ayda-s-a2b663200/" 
          rel="noreferrer noopener" 
          target="_blank"
          aria-label="Visit my LinkedIn"
        >
          Linkedin      <LinkedInIconLink size={20}/>
        </a>
          </li>
        </div>

        <div className="navigation">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <HashLink smooth to="#">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#about"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                About
              </HashLink>
            </li>
            <li>
        
              <HashLink
                to="#skills"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Skills
              </HashLink>
            </li>
            <li>
              {" "}
              <HashLink
                to="#work"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Work
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#contact"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>


      <div className="copyright">
        <div className="round-avatar"></div>
        
        <p>&copy; 2024 Ayda Sholani. All rights reserved.</p>
        
        <svg>
          <use xlinkHref={`${SmallLogo}#small-logo`}></use>
        </svg>
      </div>
    </footer>
  );
}
