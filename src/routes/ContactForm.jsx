import emailjs from "@emailjs/browser";

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
    <form onSubmit={handleOnSubmit} >

      <div className="mb-3">
        <label htmlFor="user_name" className="col-form-label">Name:</label>
        <input 
          type="text" 
          name="user_name" 
          id="user_name" 
          className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="col-form-label">Email:</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="col-form-label">Message:</label>
        <textarea 
          name="message"
          id="message"
          className="form-control"
          cols="30" 
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </form>
  )
}
