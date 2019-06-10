import React from 'react';
import Button from '../components/indexComponents/button';
import './contact.css';

const ContactUs = () => (
  <form method="POST" id="contact">
    <input type="text" name="fname" placeholder="שם מלא" />
    <input type="email" name="email" placeholder="אי-מייל" />
    <textarea form="contact" name="message" placeholder="ההודעה שלך"></textarea>
    <Button text="שלח"><input type="submit" name="submit" /></Button>
  </form>
)

export default ContactUs;
