import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

  render() {
    return (
        
        <div class="nav-wrapper">
            <img src="/images/logo-srh.png" alt=""/>
            <ul class="right">
            <li className="list">Phone: +49 6221 88-1000<br/>Email: info@hochschule-heidelberg.de</li>
            </ul>
        </div>
    );
  }
}