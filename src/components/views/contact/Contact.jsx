import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Link parameters "SERVICE_ID", "TEMPLATE_ID", "PUBLIC_KEY" with Emailjs.com user
    emailjs.sendForm('service_2925ses', 'template_6b7kvjv', form.current, 'EFQ9sMhjLsfH1G8ks')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true); // Set the submitted state to true
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className='contact-section'>
      <div className='container'>
        {isSubmitted ? ( 
          <div className='success-message'>Form submitted successfully!</div>
        ) : (
          <>
            <div className='contact-text'>
              <h2>Let's talk!</h2>
            </div>
            <div className='contact-container'>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Type full name here" required/>
                <input type="email" name="email" placeholder="Type email here" required/>
                <textarea name="message" rows="7" placeholder="Type your message here" required></textarea>
                <button type="submit" className="primary-button">Submit</button>
              </form> 
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact;