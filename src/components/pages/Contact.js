import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Please feel free to contact me directly via email using the form below.
      </p>
      <form
        action="https://formspree.io/f/xwkdvava"
        method="POST"
      >
        <label>
          Your email:
          <input type="email" name="email" placeholder="Enter your email address"></input>
        </label>
        <label>
          Your message:
          <textarea name="message" placeholder="Message"></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
