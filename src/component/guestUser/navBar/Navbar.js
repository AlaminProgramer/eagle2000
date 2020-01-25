import './navStyle.css' 
import React, { Component } from 'react'
import { Button } from '@material-ui/core'
export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
    }
  }
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
            <li><a class="active" href="#">Our Team</a></li>
            <li><a href="#">How to Order</a></li>
            <li><a href="#"  className="arrow down">Services</a>
              <ul>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
              </ul>
            </li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#"  className="arrow down">About us</a>
            
            <ul>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
                <li><a href="#" >Item type content </a> </li>
              </ul>
            </li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div class="Gbtn">
            <Button variant="outlined" color="secondary" className="mr-3"> Login</Button>
            <Button variant="contained" color="primary">Sign Up</Button>
          </div>
        </nav>
      </div>
    )
  }
}


