import React from 'react'
import './navStyle.css' 

import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo">DesignX</label>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}


