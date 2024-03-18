import ContactForm from "./ContactForm";
export default function ContactFormModal() {

  return (
    
    <>
      <button 
        type="button" 
        className="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#contactModal" 
        data-bs-whatever="ayda.sholani@gmail.com"
      >
        Contact me!
      </button>

      <div 
        className="modal fade" 
        id="contactModal" 
        tabIndex="-1" 
        aria-labelledby="ContactModal" 
        style={{ display: 'none' }} 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ContactModal">
                New message to ayda.sholani@gmail.com
              </h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
