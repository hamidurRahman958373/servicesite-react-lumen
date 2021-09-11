import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link,NavLink} from "react-router-dom";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
import ErrorApi from "../ErrorApi/ErrorApi";
class Footer extends Component {


    constructor(){
        super();
        this.state={
            address:'...',
            email:"...",
            phone:"....",
            facebook:"...",
            youtube:"...",
            footer_creadit:"...",
            error:false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result => {
            if (result==null){
                this.setState({error:true})
            }else {
                this.setState({
                    address: result[0]['address'],
                    email: result[0]['email'],
                    phone: result[0]['phone'],
                    facebook: result[0]['facebook'],
                    youtube: result[0]['youtube'],
                    footer_creadit: result[0]['footer_creadit']

                })
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }
    render() {
        if (this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className="text-center footerSection">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                <h1 className="serviceName">Follow Me</h1>
                                <a className="socialLink overflow-hidden" target='_blank' href={'//'+this.state.facebook}><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                                <a className="socialLink overflow-hidden" target='_blank' href={'//'+this.state.youtube}><FontAwesomeIcon  icon={faYoutube} />Youtube </a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                <h1 className="serviceName">Address</h1>
                                <p className="serviceDescription" >{this.state.address}</p>
                                <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} /> {this.state.email}</p>
                                <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} /> {this.state.phone}</p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                <h1 className="serviceName">Information</h1>
                                <Link className="footerLink" to="/about">About Me</Link><br/>
                                <Link className="footerLink" to="/contact">Contact Me</Link><br/>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                                <h1 className="serviceName">Legal</h1>
                                <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                                <Link className="footerLink" to="/termsCon">Terms And Condition</Link><br/>
                                <Link className="footerLink" to="/privacy">Privacy Policy</Link><br/>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center copyrightSection">
                        <a className="copyrightLink" href="#">{this.state.footer_creadit} &copy; 2021-2022</a>
                    </Container>

                </Fragment>
            );
        }
        else if (this.state.error==true){
            return <ErrorApi/>
        }





    }
}

export default Footer;