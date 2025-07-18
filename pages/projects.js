import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CRTScreen from "../components/CRTScreen";

export default function Projects(){
  return(
    <CRTScreen>
      <div className="container">
          <Header />
          <div className="projects-content">
          <h2>My Projects</h2>
          <p>Here are some of my recent projects:</p>
          <div className="project-list">
          <ul>
            <li><a href="https://whereisthemoney-sable.vercel.app/auth" target="_blank" rel="noopener noreferrer">Project 1</a></li>
            <li><a href="https://nexaforge1.netlify.app/" target="_blank" rel="noopener noreferrer">Project 2</a></li>
            {/* <li><a href="https://project3.com" target="_blank" rel="noopener noreferrer">Project 3</a></li> */}
          </ul>
          </div>
          <p>If you would like to see more details about any project, feel free to reach out!</p>
          <button className="contact-me" onClick={() => window.location.href = '/contact'}>Contact Me</button>
          </div>
          <Footer />
        </div>
    </CRTScreen>
  )
}