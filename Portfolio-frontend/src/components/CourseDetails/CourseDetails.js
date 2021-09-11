import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import HtmlParser from "react-html-parser";

class CourseDetails extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let long_titile='';
        let long_des='';
        let total_lecture='';
        let total_student='';
        let short_des='';
        let video_url='';
        let course_link='';
        let skill_all='';

        let  CouseDataArray=this.props.coursData;

        if (CouseDataArray.length==1){
            long_titile=CouseDataArray[0]['long_titile'];
            long_des=CouseDataArray[0]['long_des'];
            total_lecture=CouseDataArray[0]['total_lecture'];
            total_student=CouseDataArray[0]['total_student'];
            short_des=CouseDataArray[0]['short_des'];
            video_url=CouseDataArray[0]['video_url'];
            course_link=CouseDataArray[0]['course_link'];
            skill_all=CouseDataArray[0]['skill_all'];
        }

        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="topCoursePageContent">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                  <h3 className='CourseFullTitle'>{long_titile}</h3>
                                    <h5 className='CourseSubTitle'>Total Students {total_student}</h5>
                                    <h5 className='CourseSubTitle'>Total Lectures {total_lecture}</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className='CourseDescription'>{long_des}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Project skills</h1>
                            { HtmlParser(skill_all)}
                            <Button variant="primary">More Info</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;