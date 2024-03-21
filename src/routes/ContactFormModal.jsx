
import ContactForm from "./ContactForm";
export default function ContactFormModal() {

  return (
    
    <>
      <button 
        type="button" 
        className="btn btn-primary hollow" 
        data-bs-toggle="modal" 
        data-bs-target="#contactModal" 
        data-bs-whatever="ayda.sholani@gmail.com"
      >
        Contact Me!
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
                Contact me!
              </h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <p>Ayda Sholani</p>
                  <a href="tel:+46707479001">+46707479001</a>
                </div>
                <div className="col">
                  <ContactForm />
                </div>
              </div>
    
            </div>
            <div className="modal-footer ">
              <div className="col text-center">
                github
                linkedin
              </div>
              <span>
              
              </span>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
