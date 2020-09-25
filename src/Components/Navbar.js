import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [isNavOpen, setNav] = useState(false);
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.navLight : context.navDark;
  const navClass = isNavOpen ? "is-active" : "";

  return (
    <nav className={`${theme} navbar round-border`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-4">Recipe Planner</h1>
        <div 
          onClick={() => setNav(!isNavOpen)} 
          role="button" 
          className={`navbar-burger ${navClass}`} 
          data-target="navMenu" 
          aria-label="menu" 
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div id="navMenu" className={`navbar-menu ${navClass}`}>
        <div className="navbar-start">
          <NavLink
            exact
            to="/"
            className="navbar-item"
            activeClassName="has-text-weight-semibold is-uppercase"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="navbar-item"
            activeClassName="has-text-weight-semibold is-uppercase"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/settings"
            className="navbar-item"
            activeClassName="has-text-weight-semibold is-uppercase"
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
