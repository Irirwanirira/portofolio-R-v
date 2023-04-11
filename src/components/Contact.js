import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => (
  <div id="contact">
    <div>
      <h3>
        Get in Touch
      </h3>
      <div>
        <p>
          Have a project for me? Any questions about something
          I've built? I'd love to hear from you, give me a shout by email or
          by using the form below if you'd like to get in contact with me.
        </p>
        <div>
          <ul>
            <SocialIcon url="https://twitter.com/jaketrent" />
            <SocialIcon url="https://LinkedIn.com/jaketrent" />
            <SocialIcon url="https://github.com/jaketrent" />
          </ul>
        </div>
      </div>
    </div>
    <form method="POST">
      <label htmlFor={name}>Name</label>
      <input
        required
        className="name"
        type="text"
        name="name"
      />
      <br />

      <label forName>Email</label>
      <input
        className="Email"
        placeholder="Email"
        required
        autoComplete="email"
        type="text"
        name="Email"
      />
      <br />

      <label htmlFor="message">Message</label>
      <textarea
        className="message"
        type="text"
        name="message"
      />

      <button type="Submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
