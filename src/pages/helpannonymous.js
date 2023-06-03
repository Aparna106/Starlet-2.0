import "./headeremail.css";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Headeremail from "./Headeremailjs";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Emailjs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_130z8a3', 'template_zwiufbg', form.current, 'MJdVBjn-2h2ETnUY0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Headeremail/>
        <div className="x">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" /><br/>
   <input type="submit" value="Send" />
    </form>
        </div>
      </div>
    </XyzTransition>
  );
}