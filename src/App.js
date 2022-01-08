import React from 'react';
import BG from './components/bg';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Nav from "./components/nav";
import Typography from './components/typography';

function App() {
  
  return (
    <div className="App">
      <BG />
      <div className="page-container">
        <Nav />
        <div className="content home-content" data-aos="fade-up" data-aos-delay="400">
          <Typography type="h1" classNames="page-title" content="I'm Parthiban Nagaraj"></Typography>
          <Typography type="h2" classNames="page-sub-title" content="Senior FrontEnd Developer"></Typography>
          <Typography type="p" classNames="profile-content" content="I have extensive experience in creating web applications and ready to use business capabilities. Provided digital experience for multiple business domains including Retail, Financial and Insurance"></Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
