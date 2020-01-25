import React, { Component } from 'react'
import Background from '../img/business.jpg'
var bannerStyle={
    
  width: "100%",
  height: "400px",
}

export default class HowToOrder extends Component {
    render() {
        return (
            <div className="banner clearfix" style={{width:"100%", height:"400px", backgroundImage:`url("${require('../img/business.jpg')}")`}}>
                <h1 style={{color:"red"}}>how to order</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
