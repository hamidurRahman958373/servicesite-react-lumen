import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoadingImg from '../../image/loader.svg';
import LoadingImgone from '../../image/loading2.svg';
class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='d-flex mt-30 mb-5 justify-content-center'>
                        <Col className='text-center' lg={3} md={3} sm={12}>
                            <img className='loading-logo loding' src={LoadingImgone}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;
