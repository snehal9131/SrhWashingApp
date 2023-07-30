import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbars.css'

export default class Navbars extends Component {

  render() {
    return (
      <nav className="navbar my-nav navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Appoinments</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Appoinment</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Address</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}