import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";

export default function GithubIconLink() {
  return (
    <a 
      href="https://github.com/aydasholani" 
      rel="noreferrer noopener" 
      target="_blank" 
      aria-label="Visit my GitHub"
    >
      <AiOutlineGithub size={25} title='Github'/>
    </a>
  )
}
