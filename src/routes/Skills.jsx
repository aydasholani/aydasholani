import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { SiSqlalchemy } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";

export default function Skills() {
  const mySkills = [
    {
      name: "html",
      icon: <TbBrandHtml5 />
    },
    {
      name: "css",
      icon: <FaCss3Alt />
    }, 
    {
      name: "scss",
      icon: <BsFiletypeScss />
    },
    {
      name: "reactjs",
      icon: <FaReact />
    },
    {
      name: "React native",
      icon: <TbBrandReactNative />
    },
    {
      name: "vuejs",
      icon: <FaVuejs />    
    },
    {
      name: "javascript",
      icon: <TbBrandJavascript />
    },
    {
      name: "flask",
      icon: <TbBrandJavascript />
    },
    {
      name: "python",
      icon: <TbBrandPython />
    },
    {
      name: "sql-alchemy",
      icon: <SiSqlalchemy />
    },
    {
      name: "sql",
      icon: <TbSql />
    },
    {
      name: "nodejs",
      icon: <TbBrandNodejs />
    }
  ]

  const displaySkills = mySkills.map((skill) => {
    return (
      <li key={skill.name}>
        {skill.icon} {skill.name}
      </li>
    )
  })

  return (
    <>
    <header>
      <h2>Skills</h2>
    </header>
    <article className="my-skills">
      <ul>
      {displaySkills}
      </ul>
    </article>
    </>
  )
}
