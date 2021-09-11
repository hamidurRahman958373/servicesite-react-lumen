import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
import axios from "axios";
import Loading from "../Loading/Loading";
class TopBanner extends Component {
    constructor() {
        super();
        this.state={
            title:'',
            subTitle:'',
            loader:'d-block'
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({title:result[0]['home_title'], subTitle:result[0]['home_subtitle'],loader:'d-none'})
        }).catch(error=>{
            this.setState({title:"???", subTitle:"???"})
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col className="text-center">
                                  <span className={this.state.loader}><Loading /></span>
                                    <h1 className="topTitle">{this.state.title}</h1>
                                   <h4 className="topSubTitle">{this.state.subTitle}</h4>
                                   <Button variant="primary">More Info</Button>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default TopBanner;