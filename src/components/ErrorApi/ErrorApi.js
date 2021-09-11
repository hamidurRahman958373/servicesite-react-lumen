import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import error from "../../asset/image/error.png";

class ErrorApi extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <img className='loadererror' src={error}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ErrorApi;