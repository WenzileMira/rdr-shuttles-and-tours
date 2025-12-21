import { Link } from "react-router-dom";
import { useState } from 'react';
import Logo from '../images/logo.png';
import * as fa from 'react-icons/fa'
const Navbar = (props) => {
  const [active, setActive] = useState(true);
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="logo_container">
          <Link className="logo_link" to="/"><img src={Logo} className="logo" alt="logo"></img></Link>
        </div>
        <div className="navbar_toggle" onClick={()=>setActive(!active)}>
          {active ?<fa.FaBars/>:<fa.FaRegWindowClose/>}
        </div> 
        {props.extra}
        <ul className={active? "navbar_menu":"navbar_menu active"}>
          {props.admin}
          
          <li className="menu_items">
            <Link className="navbar_links" to="/home">
              
              <fa.FaHome/>
              <span className="nav-label">Home</span>
            </Link>
          </li>
      
          <li className="menu_items">
          <Link className="navbar_links" to="/services">
            <fa.FaHandshake/>
            <span className="nav-label">Services</span>
          </Link>
          </li>
          <li className="menu_items">
          <Link className="navbar_links" to="/about">
            <fa.FaQuestionCircle/>
            <span className="nav-label">About</span>
          </Link>
          </li>
          <li className="menu_items">
            <Link className="navbar_links" to="/specials">
              <fa.FaBus/>
              <span className="nav-label">Tours</span>
            </Link>
          </li>
          <li className="navbar_btn">
            <a
              className={props.button}
              href="https://wa.me/27615893249?text=Hello%20RDR%20Shuttle%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20shuttle%20and%20transport%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <fa.FaSignInAlt />
              <span className="nav-label">Enquire Now</span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
