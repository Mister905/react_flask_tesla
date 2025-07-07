import React from "react";
import logo from "../../assets/images/logo.svg";

const Nav = () => {
  return (
    <div>
      <nav className="custom-nav">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <img
              src={logo}
              width="120"
              height="24"
              className="custom-header-logo"
            />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons header-icon">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
