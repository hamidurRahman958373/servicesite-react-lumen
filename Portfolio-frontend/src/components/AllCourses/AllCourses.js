import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
import Loading from "../Loading/Loading";

class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            this.setState({myData:result,loading:false})
        })
    }

    render() {

        if (this.state.loading==true){
            return <Loading/>
        }
        else {
            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={myList.small_ing}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                            <p className="text-justify courseDes">{myList.short_des}</p>
                            <Link  className="courseDetails float-left" to={"/courseDetails/"+myList.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }


    }
}

export default AllCourses;