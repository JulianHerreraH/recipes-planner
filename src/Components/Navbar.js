import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar is-danger has-text-dark round-border">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-4">Recipe Planner</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink exact to="/" className="navbar-item" activeClassName="has-text-weight-semibold is-uppercase">Home</NavLink>
          <NavLink to="/favorites" className="navbar-item" activeClassName="has-text-weight-semibold is-uppercase">Favorites</NavLink>
          <NavLink to="/settings" className="navbar-item" activeClassName="has-text-weight-semibold is-uppercase">Settings</NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-danger is-light is-rounded">New</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;