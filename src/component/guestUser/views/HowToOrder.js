import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './howToOrder.css'
import Help from './howToOrder/Help'
var bannerStyle={
  width: "100%",
  height: "400px",
}

export default class HowToOrder extends Component {
    render() {
        return (
            <div className="howToOrder mt-5 ">
                    
                <div className="banner clearfix" style={{width:"100%", height:"400px", backgroundImage:`url("${require('../img/business.jpg')}")`}}>
                    <div className="overlay"></div>
                    <div >
                        <div className="row overlayText">
                            <div className="howText">
                                <h1>How to order</h1>
                                <p>Our essay writing service employs hundreds of qualified essay writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh1 pt-3 mt-3">
                    <div className="container ">
                        <div className="row placeOrderOnline">
                            <div className="col-md-6 text">
                                <Help 
                                no="1"
                                title="Place an order online"
                                body="Once you have created your account at EssayPro, you can order essay writing help by asking an essay writer: “write my essay” Simply submit the assignment details such as topic, the number of pages, different sources needed, formatting style, and order deadline. It is also possible to upload any additional files to further help the essay writer with the task."
                                />
                                <Link to='#' className="helptBtn text-center  ">GET STARTED</Link>
                            </div>
                            <div className="col-md-6  ">
                                <div className="helpImg">
                                    <img src={require('../img/sideImg.jpg')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh pt-3 mt-3">
                    <div className="container ">
                        <div className="row placeOrderOnline">
                            
                            <div className="col-md-6  ">
                                <div className="helpImg">
                                    <img src={require('../img/sideImg.jpg')}/>
                                </div>
                            </div>
                            <div className="col-md-6 text">
                                <Help 
                                no="2"
                                title="Place an order online"
                                body="Once you have created your account at EssayPro, you can order essay writing help by asking an essay writer: “write my essay” Simply submit the assignment details such as topic, the number of pages, different sources needed, formatting style, and order deadline. It is also possible to upload any additional files to further help the essay writer with the task."
                                />
                                <Link to='#' className="helptBtn text-center  ">GET STARTED</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh1 pt-3 mt-3">
                    <div className="container ">
                        <div className="row placeOrderOnline">
                            <div className="col-md-6 text">
                                <Help 
                                no="3"
                                title="Place an order online"
                                body="Once you have created your account at EssayPro, you can order essay writing help by asking an essay writer: “write my essay” Simply submit the assignment details such as topic, the number of pages, different sources needed, formatting style, and order deadline. It is also possible to upload any additional files to further help the essay writer with the task."
                                />
                                <Link to='#' className="helptBtn text-center  ">GET STARTED</Link>
                            </div>
                            <div className="col-md-6  ">
                                <div className="helpImg">
                                    <img src={require('../img/sideImg.jpg')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh pt-3 mt-3">
                    <div className="container ">
                        <div className="row placeOrderOnline">
                            
                        <div className="col-md-6  ">
                                <div className="helpImg">
                                    <img src={require('../img/sideImg.jpg')}/>
                                </div>
                            </div>
                            <div className="col-md-6 text">
                                <Help 
                                no="4"
                                title="Place an order online"
                                body="Once you have created your account at EssayPro, you can order essay writing help by asking an essay writer: “write my essay” Simply submit the assignment details such as topic, the number of pages, different sources needed, formatting style, and order deadline. It is also possible to upload any additional files to further help the essay writer with the task."
                                />
                                <Link to='#' className="helptBtn text-center  ">GET STARTED</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}