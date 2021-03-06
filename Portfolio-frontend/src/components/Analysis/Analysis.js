import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import RestClient from "../../AppUrl/RestClient";
import AppUrl from "../../AppUrl/AppUrl";
import ReactHtmlParser from 'react-html-parser';
class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[],
            des:'...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data:result})
        })

        RestClient.GetRequest(AppUrl.TechDescripiton).then(result=>{
            this.setState({des:result[0]['tech_description']})
        })
    }


    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue} >
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">
                                { ReactHtmlParser(this.state.des) }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;