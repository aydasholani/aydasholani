import emailjs from "@emailjs/browser";
import { Col } from "react-bootstrap";

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
    <Col md={{ span: 6, offset: 3 }}>
    <form onSubmit={handleOnSubmit}>
      <div className="form-floating mb-2">
        <input 
          type="text" 
          name="user_name" 
          id="user_name" 
          placeholder="Jane Doe"
          className="form-control form-control-sm" 
        />
        <label htmlFor="user_name" className="">Name</label>
  
      </div>
      <div className="form-floating mb-2">
          <input 
            type="email" 
            name="email" 
            id="email"
            className="form-control form-control-sm" 
            placeholder="janedoe@example.email.com"
          />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-2">
          <textarea 
            name="message"
            id="message"
            className="form-control form-control-sm"
            placeholder="Enter your message here..."
          />
        <label htmlFor="message">Message</label>
   
      </div>

      <div className="modal-footer button-group">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </form>
    </Col>
  )
}
