import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-form-wrapper">
        <div className="container">
          <div className="contact-container">
            <h3>Contact me</h3>
          </div>
          
          <div className="form-wrapper">
            <form action="">
              <label htmlFor="fullname">
                Name:
                <input placeholder="Jane Doe" type="text" name="fullname" id="fullname" />
              </label>

              <label htmlFor="email">
                Email:
                <input placeholder="example@email.com" type="email" name="email" id="email" />
              </label>

              <label htmlFor="message">
                Message:
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  wrap="off"
                  placeholder="Write your message here..."
                ></textarea>
              </label>

              <input className="btn primary" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
