import React from 'react';
import Button from '../components/indexComponents/button';
import './contact.css';

const ContactUs = () => (
  <form method="POST" id="contact">
    <input type="text" name="fname" placeholder="שם מלא" required />
    <input type="email" name="email" placeholder="אי-מייל" required />
    <textarea form="contact" name="message" placeholder="ההודעה שלך" required></textarea>
    <Button text="שלח"><input type="submit" name="submit" /></Button>
  </form>
)

export default ContactUs;
