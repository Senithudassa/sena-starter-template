import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CRTScreen from "../components/CRTScreen";

export default function Home() {
  return(
    <CRTScreen>
        <Header />
      <div className="container">
      <div className="home-content">
      <h2>Welcome to My Portfolio</h2>
      <img src="Picture/Dp.jpg" alt="Profile Picture" className="profile-picture" />
      <p>Hi, I'm Senithudassa, a web developer with a passion for creating dynamic and user-friendly applications.</p>
      <p>Feel free to explore my projects and learn more about me.</p>
      <button className="about-me" onClick={() => window.location.href = '/about'}>About Me</button>
      <button className="view-projects" onClick={() => window.location.href = '/projects'}>View Projects</button>
      </div>
      <Footer />
    </div>
    </CRTScreen>
  )
}
