import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
import ReactHtmlParser from "react-html-parser";

class ProjectDetail extends Component {


    constructor(props) {
        super();
        this.state={
            getProjectId:props.id,
            short_description:'',
            project_feature:'',
            live_preview:'',
            img_two:'',
            project_name:''
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.getProjectId).then(result=>{
        this.setState({
            img_two:result[0]['img_two'],
            short_description:result[0]['short_description'],
            project_feature:result[0]['project_feature'],
            live_preview:result[0]['live_preview'],
            project_name:result[0]['project_name']
        })

        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                 <Container className=' mt-5' >
                      <Row>
                          <Col lg={6} sm={12} md={6}>
                               <img className='projectDetailsImg' src={this.state.img_two}/>
                          </Col>
                          <Col lg={6} sm={12} md={6}>
                              <h2 className='serviceName'>{this.state.project_name}</h2>
                              <p className='serviceDescription'>{this.state.short_description}</p>
                              {ReactHtmlParser(this.state.project_feature)}
                              <Button variant="primary">More Info</Button>
                          </Col>
                      </Row>
                 </Container>
            </Fragment>
        );
    }
}

export default ProjectDetail;