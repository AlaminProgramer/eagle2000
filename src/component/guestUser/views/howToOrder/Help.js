import React, { Component } from 'react'
import '../howToOrder.css'
export default class Help extends Component {
    render() {
        return (
            <div className="help mt-5">
                <div className="header"> 
                     <h2> <span> {this.props.no}</span> </h2>
                     <h2 className="ml-3"> {this.props.title} </h2>
                </div>
                <div className="body">
                    <p> {this.props.body} </p>
                </div>                
            </div>
        )
    }
}
