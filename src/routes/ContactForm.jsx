import emailjs from "@emailjs/browser";
import { Form, FloatingLabel, Button } from 'react-bootstrap';

export default function ContactForm() {
  const SERVICE_ID = "service_rv3t9gc";
  const TEMPLATE_ID = "template_h6xvzzf";
  const PUBLIC_KEY = "lx8sIGJL-XUoTTol8";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };

  return (
    <Form onSubmit={handleOnSubmit} >
      <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          required
        />
      </FloatingLabel>  

      <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          required
          />
      </FloatingLabel>  

      <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="message"
          required
          style={{ height: '100px' }}
          />

      </FloatingLabel>

      <Button variant="primary" type="submit" aria-label="Email to ayda.sholani@gmail.com">
        Send email
      </Button>
    </Form>
  );
}
