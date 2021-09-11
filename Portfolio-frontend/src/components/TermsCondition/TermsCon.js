import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";

class TermsCon extends Component {




    constructor(){
        super();
        this.state={
            des:'...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information ).then(result => {
            this.setState({des:result[0]['terms']})
        })
    }
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            { ReactHtmlParser(this.state.des) }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsCon;