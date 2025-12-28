/* eslint-disable jsx-a11y/no-redundant-roles */
import * as bi from "react-icons/bi";
import Hero1 from "../images/shuttle3.jpg";
import Hero2 from "../images/shuttle9.jpg";
import Hero3 from "../images/shuttle2.jpg";
import Hero4 from "../images/shuttle4.jpg";
import Hero6 from "../images/shuttle8.jpg";
import Hero5 from "../images/shuttle5.jpg";
import Hero7 from "../images/shuttle7.jpg";
import Hero8 from "../images/shuttle1.jpg";
import Hero9 from "../images/shuttle12.jpg";
import Hero10 from "../images/shuttle6.jpg";
import Hero11 from "../images/shuttle11.jpg";
import Hero12 from "../images/shuttle10.jpg";

import Map from "../components/Map";
import Features from "../components/Features";


import ControlledCarousel from "../components/ControlledCarousel";

const Home = () => {

  const Hero = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12];

  return (
  <>

<section id="home" className="home" style={{padding:"0px 0"}}> 
      <ControlledCarousel images={Hero} interval={1200} />
      </section>
      <Features />
      <br/>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <center>
            <div className="row info mb-4">
              <div className="section-title">
                <h2>Contact</h2><br/>
              </div>
              <div className="col-lg-4">
                <div className="address">
                  <i className="bi bi-geo-alt">
                    <bi.BiLogoWhatsapp />
                  
                  </i>
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services." className="footer-link">
                  +27 61 589 3249 (Kobla) </a></p>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="email">
                  <i className="bi bi-envelope">
                    <bi.BiEnvelope />
                  </i>
                  <h4>Email</h4>
                  <p><a href="mailto:koblisto@gmail.com?subject=Shuttle%20Service%20Enquiry"
                  className="footer-link"
                  >koblisto@gmail.com</a></p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="phone">
                  <i className="bi bi-phone">
                    <bi.BiPhone />
                  </i>
                  <h4>Contact Us</h4>
                  <p><a href="tel:+27793977036" className="footer-link">
                  +27 79 397 7036 (Innocent)
                </a></p>

                </div>
              </div>
              <Map />
              <br></br>
              <p>Let's go places Short and Long distances, We've got you!</p>
              
              <p>
              <b>
              • Airport Transfers 
              • Corporate Transportation & Cross selected countries
              • Events Transportation
              • Local sightseeing tours 
              • Increased guest satisfaction 
              • Enhanced Hotel reputation 
              • Additional revenue stream 
              • Convenient & reliable transportation Why choose us? 
              • We have experienced driver's with all documents in place 
              • Prioritized guest service 
              • 24/7 availability and emergency response
              </b>
              </p>
              
            </div>
          </center>
      
        </div>
      </section>
      <section className="services-cta text-center">
              <div className="container">
                <h2>Ready to Travel With Confidence?</h2>
                <p>
                  Let Rapid Dynamic Reach Tours & Shuttling handle your transport needs
                  professionally, safely, and reliably.
                </p>
              </div><br/>
              <div className="video-hero">
  <video
    className="video-bg"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source
      src={`${process.env.PUBLIC_URL}/videos/tour4.mp4`}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

  {/* TEXT OVERLAY */}
  <div className="video-overlay">
    <h1>Reliable Shuttle & Tour Services</h1>
    <p>
      Airport Transfers • Cross-Border Travel • Corporate & Events Transport
    </p>
    <a
      href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services."
      className="video-cta"
    >
      Enquire on WhatsApp
    </a>
  </div>
</div>
<br/><br/>
            </section>
    </>
  );
};
export default Home;
