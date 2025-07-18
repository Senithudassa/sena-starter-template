import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CRTScreen from "../components/CRTScreen";

export default function Contact(){
  return(
    <CRTScreen>
        <div className="container">
          <Header />
          <div className="contact-content">
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to reach out!</p>
          <div className="contact-info">
          <ul>
            <li>LinkedIn: </li>
            <li>GitHub: </li>
          </ul>
          </div>
          <div className="contact-form">
          <p>You can also fill out the form below:</p>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          </div>
          <div className="contact-details">
          <ul>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Address:</li>
          </ul>
          </div>
          <div className="social-media">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="">Twitter</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
          </div>
         <Footer />
         </div>
        </div>
    </CRTScreen>
  )
}