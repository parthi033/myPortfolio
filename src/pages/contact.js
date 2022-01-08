import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "../components/nav";

export default function Contact() {
  return (
    <div className="page-container">
        <Nav />
        <div className="content home-content" data-aos="fade-up" data-aos-delay="400">
            <h1>Get In Touch</h1>
            <div className="contact-container">
                <div class="contact-info"><i className="fas fa-envelope"></i>Parthi033@gmail.com</div>
                <div class="contact-info"><i className="fas fa-mobile"></i>+1 201-989-5771</div>
                <div class="contact-info"><i className="fab fa-linkedin-in"></i>https://www.linkedin.com/in/parthiban-nagaraj-6784241a/</div>
            </div>
        </div>
    </div>
  );
}