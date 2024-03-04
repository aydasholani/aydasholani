import React from "react";
import Logo from "../smallLogo.png";
import { HashLink } from "react-router-hash-link";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import roundAvatar from '../img/round.png'

export default function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <h3>Contact</h3>
          <p>Email: ayda.sholani@gmail.com</p>
          <p>Phone: +46707479001</p>
          <p>Address: Stockholm, Sweden</p>
        </div>

        <div class="social-media">
          <h3>Follow me</h3>
          <li>
          <a 
            href="https://github.com/aydasholani" 
            rel="noreferrer noopener" 
            target="_blank" 
            aria-label="Visit my GitHub"
          >
            Github <AiOutlineGithub size={20} title='Github'/>
          </a>
          </li>
          <li>
          <a 
          href="https://www.linkedin.com/in/ayda-s-a2b663200/" 
          rel="noreferrer noopener" 
          target="_blank"
          aria-label="Visit my LinkedIn"
        >
          Linkedin <AiOutlineLinkedin size={20} title='LinkedIn'/>
        </a>
          </li>
        </div>

        <div class="navigation">
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
              {" "}
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

 
      {/* <img className="small-avatar" src={roundAvatar}></img> */}
      <div class="copyright">
      <img className="small-avatar" src={roundAvatar}></img>
        <p>&copy; 2024 Ayda Sholani. All rights reserved.</p>
        <img src={Logo} className="small-logo" alt="logo" height={10} />
      </div>
    </footer>
  );
}
