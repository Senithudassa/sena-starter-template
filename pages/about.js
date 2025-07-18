import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CRTScreen from "../components/CRTScreen";

export default function About(){
  return(
    <CRTScreen>
        <div className="container">
          <Header />
          <div className="about-content">
          <h2>About Me</h2>
          <p>I am a passionate web developer with a love for creating dynamic and user-friendly applications.</p>
          <div className="skills">
            <h3>Skills</h3>
          <ul>
            <li className="html">Html</li>
            <li className="css">css</li>
            <li className="javascript">JavaScript</li>
            <li className="react">React</li>
            <li className="nodejs">Node.js</li>
            <li className="expressjs">Express.js</li>
            <li className="mysql">Mysql</li>
            <li className="nextjs">Next.js</li>
          </ul>
          </div>
          <p>Feel free to explore my projects and get in touch if you have any questions or opportunities!</p>
          <button className="view-projects" onClick={() => window.location.href = '/projects'}>View Projects</button>
          <button className="contact-me" onClick={() => window.location.href = '/contact'}>Contact Me</button>
          <Footer />
          </div>
        </div>
    </CRTScreen>
  )
}