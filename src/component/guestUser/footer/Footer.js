import React, { Component } from 'react'
import './footer.css'
import { Button , ButtonGroup } from '@material-ui/core'
export default class Footer extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <div className="myFooter  pb-5 ">
                <div className="container">
                    <div className="clearfix"></div>
                    <div className="row ">
                        <div className="col-md-5 ">
                            
                            <div className="section_header">
                                <h2>How Our Service is Used:</h2>
                            </div>
                            <p className="">
                            The Service EssayPro Provides Is Used To Further Research Into The Subject, Generate Input For Further Reasoning, And Citations. We Help College Students With Their Studies By Providing Them With Examples Of Essays, Articles, Dissertations, Case Studies, Coursework, Powerpoint Presentations, Research Papers, Etc. EssayPro Essays Are NOT Intended To Be Forwarded As Finalized Work As It Is Only Strictly Meant To Be Used For Research And Study Purposes. EssayPro Does Not Endorse Or Condone Any Type Of Plagiarism.

                            </p>
                        </div>
                        <div className="col-md-7 ">
                            <div className="section_header text-center"> 
                                <h2>Order a Custom Academic Paper!</h2>
                                <p className="text-center mb-5 mt-2">Calculate the approximate cost of your paper</p>
                                
                            </div>
                            <div className="section_body">
                                <div className="row">
                                    <div className="col-md-4">
                                        
                                    <div class="wrapper mb-4" >
                                            <select size="1" id="sel" className="btn btn-success selectOpen" name="" id="" class="form-control">
                                                <option >Writing</option>
                                                <option value="">One</option>
                                                <option value="">Two</option>
                                                <option value="">Three</option>
                                                <option value="">Four</option>
                                                <option value="">Five</option>
                                                <option value="">Six</option>
                                                <option value="">Seven</option>
                                                <option value="">Eight</option>
                                                <option value="">Nine</option>
                                                <option value="">Ten</option>
                                            </select>
                                        </div>
                                        <div class="wrapper mb-4" >
                                            <select size="1" id="sel" className="btn btn-success selectOpen" name="" id="" class="form-control">
                                                <option >Two week</option>
                                                <option value="">One</option>
                                                <option value="">Two</option>
                                                <option value="">Three</option>
                                                <option value="">Four</option>
                                                <option value="">Five</option>
                                                <option value="">Six</option>
                                                <option value="">Seven</option>
                                                <option value="">Eight</option>
                                                <option value="">Nine</option>
                                                <option value="">Ten</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        
                                    <div class="wrapper mb-4" >
                                            <select size="1" id="sel" className="btn btn-success selectOpen" name="" id="" class="form-control">
                                                <option >Easy (Any type)</option>
                                                <option value="">One</option>
                                                <option value="">Two</option>
                                                <option value="">Three</option>
                                                <option value="">Four</option>
                                                <option value="">Five</option>
                                                <option value="">Six</option>
                                                <option value="">Seven</option>
                                                <option value="">Eight</option>
                                                <option value="">Nine</option>
                                                <option value="">Ten</option>
                                            </select>
                                        </div>
                                        <div class="wrapper mb-4" >
                                            <select size="1" id="sel" className="btn btn-success selectOpen" name="" id="" class="form-control">
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                                <option value="">Page 1</option>
                                            </select>
                                        </div>
                                     </div>
                                    <div className="col-md-4">
                                        <div className="doller">
                                            <p>10 $</p>
                                            <span>Minimum price</span>
                                        </div>
                                        <button className="btn cont">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer_menu mt-5">
                            <ul>
                                <li className=" " ><a href="#">Become a writer</a></li>
                                <li><a href="#">Affiliate program</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li className="bnone"><a style={{border:"none"}} href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-3 ">
                                <div className="play  mt-5">
                                    <img src={require('../img/playbutton.png')}/>
                                </div>
                                <div className="card">
                                    <img src={require('../img/all.png')}/>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-5">
                                <div className="mt-5 pt-5 icon text-right">
                                    <ul>
                                        <li><a href="#"> <i className="fa fa-facebook"/> </a></li>
                                        <li><a href="#"> <i className="fa fa-youtube"/> </a></li>
                                        <li><a href="#"> <i className="fa fa-google"/> </a></li>
                                        <li><a href="#"> <i className="fa fa-instagram"/> </a></li>
                                    </ul>
                                </div>
                                <p className="fs_11">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used.
                                </p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        
                        <p  style={{width:"100%", textAlign:"center", paddingTop:"40px"}}>
                        © 2020 EssayPro. All rights reserved.
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}
