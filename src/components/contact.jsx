import "./contact.css";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-form">
          <form action="https://formsubmit.co/your-email-here" method="POST">
            <div className="name-email-group">
              <div className="form-group" style={{ marginRight: "15px" }}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <MdLocationOn className="info-icon" />
            <p>Murang'a, Kenya</p>
          </div>
          <div className="info-item">
            <MdEmail className="info-icon" />
            <a href="mailto:millyannahi@gmail.com">Click here to send email</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
