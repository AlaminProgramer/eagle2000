import React, { Component } from 'react'
import Navbar from '../guestUser/navBar/Navbar'
import Footer from './footer/Footer'
import HowToOrder from './views/HowToOrder'

export default class GuestHome extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <HowToOrder/>
                <Footer/>
            </div>
        )
    }
}
