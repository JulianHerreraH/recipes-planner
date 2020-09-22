import React from 'react';

function Navbar() {
  return (
    <nav className="navbar is-danger has-text-dark round-border">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-4">Recipe Planner</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">Home</a>
          <a className="navbar-item" href="#">Favorites</a>
          <a className="navbar-item" href="#">Setting</a>
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