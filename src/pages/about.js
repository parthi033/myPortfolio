import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "../components/nav";
import Profile from '../assets/Parthiban_Nagaraj.docx';
import BG from '../components/bg';
import Tag from '../components/tag';
import Typography from '../components/typography';

export default function About() {
  const webTechnology = {
    title: "Web Technology",
    items: [{
      title: "React",
      description: "4 Years of Experience"
    },{
      title: "Redux",
      description: "2 Years of Experience"
    },{
      title: "JavaScript",
      description: "11 Years of Experience"
    },{
      title: "HTML5/CSS3",
      description: "13 Years of Experience"
    },{
      title: "Bootstrap",
      description: "11 Years of Experience"
    },{
      title: "Angular",
      description: "2 Years of Experience"
    },{
      title: "Enzyme",
      description: "3 Years of Experience"
    },{
      title: "Node",
      description: "3 Years of Experience"
    },{
      title: "Express",
      description: "1 Year of Experience"
    },{
      title: "JSON",
      description: "9 Years of Experience"
    }
  ]};
  const testingTools = {
    title: "Testing Tools",
    items: [{
      title: "Jasmine",
      description: "2 Years of Experience"
    },{
      title: "Enzyme",
      description: "3 Years of Experience"
    },{
      title: "Cypress",
      description: "1 Year of Experience"
    }]
  }
  const cssTools = {
    title: "CSS Preprocessors",
    items: [{
      title: "SCSS/SASS",
      description: "6 Years of Experience"
    },{
      title: "LESS",
      description: "3 Years of Experience"
    }]
  }
  const cmsTools = {
    title: "Content Management System",
    items: [{
      title: "AEM",
      description: "6 Years of Experience"
    },{
      title: "CQ5",
      description: "2 Years of Experience"
    },{
      title: "Tridion",
      description: "2 Years of Experience"
    }]
  }
  const graphicTools = {
    title: "Graphic Tools",
    items: [{
      title: "Photoshop",
      description: "9 Years of Experience"
    },{
      title: "Invision",
      description: "5 Years of Experience"
    },{
      title: "Sketch",
      description: "3 Years of Experience"
    }]
  }
  const adaTools = {
    title: "ADA Tools",
    items: [{
      title: "NVDA",
      description: "5 Years of Experience"
    },{
      title: "AXE",
      description: "2 Years of Experience"
    },{
      title: "JAWS",
      description: "2 Years of Experience"
    }]
  }
  const otherTools = {
    title: "Other Tools",
    items: [{
      title: "JIRA",
      description: "6 Years of Experience"
    },{
      title: "Confluence",
      description: "5 Years of Experience"
    },{
      title: "GitHub",
      description: "8 Years of Experience"
    }]
  }
  const methodologies = {
    title: "Methodologies",
    items: [{
      title: "Kanban",
      description: "2 Years of Experience"
    },{
      title: "Waterfall",
      description: "6 Years of Experience"
    },{
      title: "Agile",
      description: "4 Years of Experience"
    }]
  }
  return (
    <>
    <BG/>
    <div className="page-container">
        <Nav />
        <div className="content home-content" data-aos="fade-up" data-aos-delay="400">
          <Typography type="h1" classNames="page-title" content="About Me" data-test="test"></Typography>
            <div className="aboutme-container">
              <div className="card-panel">
                <div className="card">
                  <span className="title">13+</span>
                  <span className="description">Years of experience</span>
                </div>
                <div className="card">
                  <span className="title">50+</span>
                  <span className="description">Completed Projects</span>
                </div>
                <div className="card">
                  <span className="title">6+</span>
                  <span className="description">Awards and Recognition</span>
                  
                </div>
              </div>
              <h2>Personal Info </h2>
              <div className="pi-panel">
                <div className="pi-info"><span>Full Name: </span>Parthiban Nagaraj</div>
                <div className="pi-info"><span>Age: </span>33</div>
                <div className="pi-info"><span>City/State: </span>New Britain/CT</div>
                <div className="pi-info"><span>Phone: </span>+1 201-989-5771</div>
                <div className="pi-info"><span>Email: </span>Parthi033@gmail.com</div>
              </div>
            </div>
              <a href={Profile} download className='btn'>Download Profile<i className="fas fa-download"></i></a>
              <a href="https://www.linkedin.com/in/parthiban-nagaraj-6784241a/" target="_blank" className='btn'>Linked In<i className="fab fa-linkedin"></i></a>
            <Tag tags={webTechnology}></Tag>
            <Tag tags={testingTools}></Tag>
            <Tag tags={cssTools}></Tag>
            <Tag tags={cmsTools}></Tag>
            <Tag tags={graphicTools}></Tag>
            <Tag tags={adaTools}></Tag>
            <Tag tags={otherTools}></Tag>
            <Tag tags={methodologies}></Tag>
          </div>
      </div>
    </>
  );
}