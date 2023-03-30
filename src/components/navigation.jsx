import React from "react";
import Login  from "../pages/login/Login";
// import {Link} from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#top">
            ResourceX
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#portfolio" className="page-scroll">
                Departments
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
<<<<<<< HEAD
              <a href="/register" className="page-scroll1">
=======
              <a href="/register" className="page-scroll2">
>>>>>>> 1036aed9f0d21146d774c6335f929420fe391fdc
                SignUp
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
<<<<<<< HEAD
            
=======
            <li> 
            
              <a href="/register" className="page-scroll1">SignUp</a>
            </li>
       
>>>>>>> 1036aed9f0d21146d774c6335f929420fe391fdc
          </ul>
        </div>
      </div>
    </nav>
  );
};
