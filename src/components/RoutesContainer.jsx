import React from 'react'
import { Routes, Route} from "react-router-dom";
import About from '../routes/About';
import Contact from '../routes/Contact';
import Skills from '../routes/Skills';
import Work from '../routes/Work';
import Home from '../routes/Home';

export default function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
