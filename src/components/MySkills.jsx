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

import { Row, Col, Card } from "react-bootstrap";

export default function MySkills() {
  const mySkills = [
    {
      name: "html",
      icon: <TbBrandHtml5 />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "css",
      icon: <FaCss3Alt />,
      img: "https://picsum.photos/seed/picsum/"
    }, 
    {
      name: "scss",
      icon: <BsFiletypeScss />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "reactjs",
      icon: <FaReact />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "React native",
      icon: <TbBrandReactNative />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "vuejs",
      icon: <FaVuejs />,
      img: "https://picsum.photos/seed/picsum/"    
    },
    {
      name: "javascript",
      icon: <TbBrandJavascript />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "flask",
      icon: <TbBrandJavascript />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "python",
      icon: <TbBrandPython />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "sql-alchemy",
      icon: <SiSqlalchemy />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "sql",
      icon: <TbSql />,
      img: "https://picsum.photos/seed/picsum/"
    },
    {
      name: "nodejs",
      icon: <TbBrandNodejs />,
      img: "https://picsum.photos/seed/picsum/"
    }
  ]
  
  const displaySkills = mySkills.map((skill, index) => {
    return (  
      <Col key={skill.name}  xxs={6} md={4} lg={4} xl={3} className="p-2">
      <Card>
        <Card.Body>
          <Card.Img src={`https://picsum.photos/200/100?random=${index}`} alt={skill.name} />
          <Card.Title>{skill.icon}{skill.name}</Card.Title>
          <Card.Text>{skill.description}</Card.Text>
          <Card.Link href={skill.link} target="_blank">{skill.linkText}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    )
  })

  return (
    <Row className="p-4">
      {displaySkills}
    </Row>
  )
}
