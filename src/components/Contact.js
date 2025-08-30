import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_39iuxf8',
      'template_3rky2dq',
      form.current,
      'glnahPLXPdrZK_OcP'
    )
    .then(result => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch(error => {
      alert('Failed to send message.');
      console.error(error);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>📬 Contact Me</h2>
      <div className="contact-container">
        
        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> nirmalbarot067@gmail.com</p>
          <p><strong>Location:</strong> Ahmedabad, Gujarat, India</p>
          <p>
            Whether it’s building something cool, solving a real-world problem, 
            or just geeking out over code — I’m always open to connect 🚀
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
