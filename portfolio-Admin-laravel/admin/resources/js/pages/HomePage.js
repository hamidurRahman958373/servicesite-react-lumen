import React, {Component,Fragment} from 'react';
import Menu from "../components/Menu";
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import Loading from "../components/Loading";
import WentWrong from "../components/wentWrong";

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,
            rowDataID: '',
            delete: 'Delete',
        }

    }

    componentDidMount() {
        Axios.get('/CountTotal').then((resposns) => {

            if (resposns.status == 200) {
                this.setState({dataList: resposns.data, isLoading: false, isError: false})
            } else {
                this.setState({isLoading: false, isError: true})
            }
        }).catch((error) => {
            this.setState({isLoading: false, isError: true})
        })
    }


    render() {
        if (this.state.isLoading == true) {
            return (
                <menu>
                    <Loading/>
                </menu>
            );
        } else if (this.state.isError == true) {
            return (
                <Menu>
                    <WentWrong/>
                </Menu>
            );
        } else {
            const data = this.state.dataList;
            return (
                <Fragment>
                    <Menu>
                        <Container>
                            <Row>
                                <Col className='p-2' md={3} lg={3} sm={6}>
                                    <Card className='cardBox'>
                                        <Card.Body>
                                            <h5 className='cardTitle'>{data['Course']}</h5>
                                            <h5 className='cartSubtitle' >Total Course</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='p-2' md={3} lg={3} sm={6}>
                                    <Card className='cardBox'>
                                        <Card.Body>
                                            <h5 className='cardTitle'>{data['project']}</h5>
                                            <h5 className='cartSubtitle' >Total project</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='p-2' md={3} lg={3} sm={6}>
                                    <Card className='cardBox'>
                                        <Card.Body>
                                            <h5 className='cardTitle'>{data['Service']}</h5>
                                            <h5 className='cartSubtitle' >Total Service</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='p-2' md={3} lg={3} sm={6}>
                                    <Card className='cardBox'>
                                        <Card.Body>
                                            <h5 className='cardTitle'>{data['Review']}</h5>
                                            <h5 className='cartSubtitle' >Total Review</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='p-2' md={3} lg={3} sm={6}>
                                    <Card className='cardBox'>
                                        <Card.Body>
                                            <h5 className='cardTitle'>{data['Contact']}</h5>
                                            <h5 className='cartSubtitle' >Total Contact</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </Fragment>
            );
        }
    }
}
export default HomePage;
