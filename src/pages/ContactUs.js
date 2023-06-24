import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin,FaWhatsapp } from "react-icons/fa";
import "tachyons";
import myimg from '../myimg.png'

const ContactUs = () => {
  return (
    <div className="tc">
      <img src={myimg} alt="myimg" className="br-100 bg-silv shadow-5 grow h8 w5 dib" />
      <h1 className="f3 mb2">Tharindu Chathuranga Ruwanpathirana</h1>
      <p className="f5 lh-copy measure center">
      I am currently an IT Undergraduate in university of Moratuwa. I have several years of experience in Software Development. My expertise spans a range of front-end and back-end technologies, including HTML/CSS, 
      JavaScript, React,  Node.js, Express.js, PHP,  MySQL, and MongoDB. I have worked on numerous full stack development projects throughout my career. I am a quick learner who is able to adapt to new technologies and tools with ease.

      </p>
      <div className="flex justify-center">
      <a href="https://linkedin.com/in/tharindu-chathuranga-ruwanpathirana-5917a520a" target="_blank" rel="noopener noreferrer" className="link dim gray dib mr3">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/tharindu432" target="_blank" rel="noopener noreferrer" className="link dim gray dib mr3">
          <FaGithub size={30} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=94764492334" target="_blank" rel="noopener noreferrer" className="link dim gray dib mr3">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://instagram.com/chathurangaruwanpathirana/" target="_blank" rel="noopener noreferrer" className="link dim gray dib mr3">
          <FaInstagram size={30} />
        </a>
        
      </div>
    </div>
  );
};

export default ContactUs;
