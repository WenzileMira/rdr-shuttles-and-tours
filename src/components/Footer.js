import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Useful Links */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/specials">Special Offers</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>Airport Transfers</li>
                <li>Cross-Border Shuttle Tours</li>
                <li>Family, Kids & Nature Tours</li>
                <li>Executive & Lifestyle Transport</li>
                <li>Events & Group Transport</li>
                
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Mbombela (Nelspruit)<br />
                South Africa<br />

                <strong>Call:</strong>{" "}
                <a href="tel:+27793977036" className="footer-link">
                  +27 79 397 7036 (Innocent)
                </a>
                <br />
                <strong>WhatsApp:</strong><a href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services."> +27 61 589 3249 (Kobla)<br /></a>

                <strong>Email:</strong>{" "}
                <a
                  href="mailto:koblisto@gmail.com?subject=Shuttle%20Service%20Enquiry"
                >
                  koblisto@gmail.com
                </a>
              </p>
            </div>

            {/* About & Social */}
            <div className="col-lg-3 col-md-6 footer-info">
              <h4>About RDR</h4>
              <p>
                Reliable, professional shuttle and tour services based in
                Nelspruit, serving South Africa and cross-border destinations.
                Not just transport — an experience.
              </p>

              <div className="social-links">

                <a
                  href="https://wa.me/27615893249?text=Hello%20Rapid%20Dynamic%20Reach,%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:koblisto@gmail.com?subject=Shuttle%20Service%20Enquiry"
                  className="social-item"
                >
                  <FaMailBulk />
                  <span>Email</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61585246208647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright text-center">
          © {new Date().getFullYear()} <strong>Rapid Dynamic Reach</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
