import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// components
import { NavbarToggler } from './navbar-toggler';
import { SearchForm } from './search-form';

export class Nav extends Component {

  render() {
    const target = 'navbar';
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="">Bootstrap Starter</a>
        <NavbarToggler target={target} />
        <div className="collapse navbar-collapse" id={target}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
          <SearchForm />
        </div>
      </nav>
    );
  } // ./render

} // ./Nav
