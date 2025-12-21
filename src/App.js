import Navbar from "./components/Navbar";
import Alert from "react-bootstrap/Alert";
//import MyVerticallyCenteredModal from "./components/Modal";
import Home from "./pages/Home";
import Breadcrumbs from "./components/Breadcrumbs";
import About from "./pages/About";
import Services from "./pages/Services";
import Specials from "./pages/Specials";
//import Login from "./pages/Login";
//import Logout from "./pages/Logout";
//import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import * as icons from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import Admin from "./pages/Admin";
import Bookings from "./pages/Bookings";



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//  apiKey: "AIzaSyASHY3DQFCh4l5rBrehHp4Qf9lMOI7vy5s",
//  authDomain: "therockatedwaleni.firebaseapp.com",
//  projectId: "The Rock @ Edwaleni",
//  storageBucket: "therock@edwaleni.appspot.com",
//  messagingSenderId: "307143876286",
//  appId: "1:307143876286:web:2fd32c315c003182eb08ef",
//  measurementId: "G-TNXRZQX3N8"
//};

// Initialize Firebase

const App = () => {
  const [token, setToken] = useState(null);
  const [id, setId] = useState("");
  const [user, setUser] = useState("");
  const [superuser, setSuperuser] = useState(false);
  const [message] = useState("");
  const [className] = useState("");
  const [show, setShow] = useState(false);
  const [setModalShow] = React.useState(true);

  const checkToken = () => {
    setToken(localStorage.getItem("token"));
  };
  const checkId = () => {
    setId(localStorage.getItem("user_id"));
  };
  const checkUser = () => {
    setUser(localStorage.getItem("user"));
  };
  const checkSuperuser = () => {
    setSuperuser(localStorage.getItem("is_superuser"));
  };
  useEffect(() => {
    checkToken();
    checkId();
    checkUser();
    checkSuperuser();
    console.log("component refreshe after token has been adde or deleted");
  }, [token, id, user, superuser]);
  return (
  <>
    {/* NAVBAR stays fixed */}
    {token ? (
      superuser ? (
        <Navbar
          button="button1"
          admin={
            <li className="menu_items">
              <Link className="navbar_links" to="/admin">
                <icons.FaDatabase />
              </Link>
            </li>
          }
          icon={<icons.FaSignOutAlt />}
        />
      ) : (
        <Navbar
          button="button1"
          admin={
            <li className="menu_items">
              <Link
                className="navbar_links"
                to="/admin"
                onClick={() => setModalShow(true)}
              >
                <icons.FaDatabase />
              </Link>
            </li>
          }
          icon={<icons.FaSignOutAlt />}
        />
      )
    ) : (
      <Navbar button="button" icon={<icons.FaSignInAlt />} />
    )}

    {/* ALERT stays above content */}
    {show && (
      <Alert
        variant={className}
        onClose={() => setShow(false)}
        dismissible
      >
        <p>{message}</p>
      </Alert>
    )}

    {/* 🔥 THIS IS THE FIX */}
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Breadcrumbs text="Home" icon={<icons.FaHome />} />
              <Home />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Breadcrumbs text="Home" icon={<icons.FaHome />} />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Breadcrumbs text="About Us" icon={<icons.FaQuestionCircle />} />
              <About />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Breadcrumbs text="Services" icon={<icons.FaUsersCog />} />
              <Services />
            </>
          }
        />
        <Route
          path="/specials"
          element={
            <>
              <Breadcrumbs text="Specials" icon={<icons.FaAddressBook />} />
              <Specials />
            </>
          }
        />
        <Route
          path="/bookings"
          element={
            <>
              <Breadcrumbs text="Bookings" icon={<icons.FaSignInAlt />} />
              <Bookings />
            </>
          }
        />
      </Routes>

      <Footer />
    </main>
  </>
  );
};

export default App;
