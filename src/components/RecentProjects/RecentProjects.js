import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
class RecentProjects extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjecteHome).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {


        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return <Col sm={12} md={6} lg={4} className="p-2">
                <Card className="projectCard">
                    <Card.Img variant="top" className='imgHeight' src={myList.img_one} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">
                            {myList.short_description}
                        </Card.Text>
                        <Button variant="primary"><Link className='textColor' to={'/projectDetails/'+myList.id+'/'+myList.project_name}>Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default RecentProjects;