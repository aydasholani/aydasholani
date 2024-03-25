import { useState } from 'react';
import { Button  } from "react-bootstrap";
import ContactFormModal from '../routes/ContactFormModal'


export default function ContactSection() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="p-4 text-center contact-wrapper" id="contact">
      <Button variant="outline-primary" size="lg" onClick={() => setModalShow(true)}>
        Contact Me!
      </Button>
        
      <ContactFormModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}
