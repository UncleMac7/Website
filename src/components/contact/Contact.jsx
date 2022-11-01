import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './contact.scss'

export default function Contact() {

  const [Message,setMessage] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_8y7ssb8', 'template_eqpeltg', form.current, 'JGgBnv8m24yKnjwiX')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/handshake.svg" alt=''/>

      </div>
      <div className="right">
          <h2>Contact</h2>
          <form ref={form}  onSubmit={handleSubmit}>

            <input type="text" placeholder="Email" name="email"/>
            <textarea placeholder='Message' name="message"></textarea>
            <button type="submit" >Send</button>
            {Message && <span>Thanks, I'll Reply ASAP :)</span>}
          </form>

      </div>

    </div>
  )
}
