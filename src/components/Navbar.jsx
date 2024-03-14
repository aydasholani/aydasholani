import React from 'react'
import GithubIconLink from '../icons/GithubIconLink';
import LinkedInIconLink from '../icons/LinkedInIconLink';
import { HashLink } from 'react-router-hash-link';
import DownloadCv from './DownloadCv';
import Logo from '../icons/Logo'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-flex-wrapper">
          <HashLink
            to="/#"
            scroll={(e) =>
              e.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <Logo />
          </HashLink>

          <ul>
            <li>
              <HashLink 
                to="/#"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
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
              >
                Hobbies
              </HashLink>
            </li>

          </ul>

          <div className="social-media">
            <DownloadCv />
            <GithubIconLink />
            <LinkedInIconLink />
          </div>
        </div>
      </nav>
    </>
  ) 

}
