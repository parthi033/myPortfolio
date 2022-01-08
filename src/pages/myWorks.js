import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "../components/nav";
import BG from '../components/bg';
import Typography from '../components/typography';

export default function About() {
  return (
      <>
        <BG/>
        <div className="page-container">
            <Nav />
            <div className="content home-content" data-aos="fade-up" data-aos-delay="400">
              <Typography type="h1" classNames="page-title" content="My Works - Coming Soon"></Typography>
            </div>
        </div>
    </>
  );
}