import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from 'axios';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Loading from "../components/Loading";
import WentWrong from "../components/wentWrong";

class CoursePage extends Component {
    constructor() {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataID:'',
            delete:'Delete',
        }
        this.dataDelete=this.dataDelete.bind(this);
        this.imgFormating=this.imgFormating.bind(this);

        this.addNewModalOpen=this.addNewModalOpen.bind(this);
        this.addNewModalClose=this.addNewModalClose.bind(this);
    }

    addNewModalOpen(){
        this.setState({AdNewModal:true});

    }
    addNewModalClose(){
        this.setState({AdNewModal:false});
    }

    componentDidMount() {
        Axios.get('/CourseList').then((resposns)=>{

            if (resposns.status==200){
                this.setState({dataList:resposns.data,isLoading:false,isError:false})
            }
            else {
                this.setState({isLoading:false,isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })
    }

    dataDelete(){
        let confirmResult=confirm("Do You Want To Delete ?")
        if (confirmResult===true){
            this.setState({delete:'Deleting..'})
            Axios.post("/CourseDelete",{id:this.state.rowDataID}).then((response)=>{
                if (response.data==1 && response.status==200){
                    this.setState({delete:'Delete Success..'})
                    this.componentDidMount();
                    setTimeout(function (){
                        this.setState({delete:'Delete'})
                    }.bind(this),2000)
                }
                else {
                    this.setState({delete:'Delete Fail'})
                    setTimeout(function (){
                        this.setState({delete:'Delete '})
                    }.bind(this),2000)
                }

            }).catch(error=>{

                this.setState({delete:'Delete Fail'})
                setTimeout(function (){
                    this.setState({delete:'Delete '})
                }.bind(this),2000)
            })
        }
    }
    imgFormating(cell,row){
        return(
            <img className='imgTable' src={cell}/>
        )
    }
    render() {
        if (this.state.isLoading==true){
            return (
                <menu>
                    <Loading/>
                </menu>
            );
        }
        else if (this.state.isError==true){
            return (
                <Menu>
                    <WentWrong/>
                </Menu>
            );
        }
        else {
            const data= this.state.dataList;
            const column=[
                {dataField: 'id', text:'ID'},
                {dataField: 'short_title', text:'Short Title'},
                {dataField: 'short_des', text:'Short Description'},
                {dataField: 'small_ing', text:'Small Img',formatter:this.imgFormating},
                {dataField: 'long_titile', text:'Long Title'},
                {dataField: 'long_des', text:'Long Description'},
                {dataField: 'total_lecture', text:'Total Lecture'},
                {dataField: 'total_student', text:'Total Students'},
                {dataField: 'skill_all', text:'Skill All'},
                {dataField: 'video_url', text:'Video Url'},
                {dataField: 'course_link', text:'Course Link'},
            ];
            const  selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataID:row['id']});
                }
            }
            return (
                <Fragment>
                    <Menu title='Courses'>
                        <Container>
                            <h1>Contact list</h1>
                            <Row>
                                <Col lg={12} sm={12} md={12}>
                                    <button onClick={this.dataDelete} className=' btn btn-danger'> {this.state.delete}</button>
                                    <button onClick={this.addNewModalOpen} className=' btn btn-danger btnTwo'>Add Post</button>

                                    <BootstrapTable
                                        keyField='id'
                                        data={ data }
                                        selectRow={selectRow}
                                        columns={ column }
                                        pagination={ paginationFactory() }
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                    <Modal show={this.state.AdNewModal} onHide={this.addNewModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.addNewModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }
    }
}

export default CoursePage;
