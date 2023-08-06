import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        Please feel free to contact me directly via email using the form below.
      </p>
      <form
        action="https://formspree.io/f/xwkdvava"
        method="POST"
        className="contactForm"
      >
        <label>
          Your email:
          <input type="email" name="email" placeholder="Enter your email address" className="emailInput"></input>
        </label>
        <label>
          Your message:
          <textarea name="message" placeholder="Message" className="messageInput"></textarea>
        </label>

        <button type="submit" className="contactSubmitBtn">Send</button>
      </form>
    </div>
  );
}
