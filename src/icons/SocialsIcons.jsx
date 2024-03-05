import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function SocialsIcons() {
  return (
    <div className='social-media'>
      <a 
        href="https://github.com/aydasholani" 
        rel="noreferrer noopener" 
        target="_blank" 
        aria-label="Visit my GitHub"
      >
        <AiOutlineGithub size={25} title='Github'/>
      </a>

      <a 
          href="https://www.linkedin.com/in/ayda-s-a2b663200/" 
          rel="noreferrer noopener" 
          target="_blank"
          aria-label="Visit my LinkedIn"
        >
          <AiOutlineLinkedin size={25} title='LinkedIn'/>
        </a>
    </div>
  )
}
