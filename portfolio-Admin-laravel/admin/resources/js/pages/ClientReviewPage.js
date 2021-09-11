import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from 'axios';
import {Col, Container, Form, Row,Button,Modal} from "react-bootstrap";
import Loading from "../components/Loading";
import WentWrong from "../components/wentWrong";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ClientReviewPage extends Component {
    constructor() {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataID:'',
            delete:'Delete',
            AdNewModal:false,

            addTitle:'',
            addDes:'',
            addFIle:'',
        }
        this.dataDelete=this.dataDelete.bind(this);
        this.imgFormating=this.imgFormating.bind(this);

        this.addNewModalOpen=this.addNewModalOpen.bind(this);
        this.addNewModalClose=this.addNewModalClose.bind(this);

        this.titleOnChang=this.titleOnChang.bind(this);
        this.desOnChang=this.desOnChang.bind(this);
        this.fileOnChang=this.fileOnChang.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);


    }

    addNewModalOpen(){
        this.setState({AdNewModal:true});


    }
    addNewModalClose(){
        this.setState({AdNewModal:false});
    }

    titleOnChang(event){
        let title =event.target.value;
        this.setState({addTitle:title});
    }
    desOnChang(event){
        let des =event.target.value;
        this.setState({addDes:des});
    }

    fileOnChang(event){
        let  photo=event.target.files[0];
        this.setState({addFIle:photo});
    }
    addFormSubmit(event){
        let title = this.state.addTitle;
        let des=this.state.addDes;
        let photo=this.state.addFIle;
        let photoSize=photo.size;
        let photoName=photo.name;

        let url='/AddReview';

        let myFromData=new FormData();
        myFromData.append('title',title);
        myFromData.append('des',des);
        myFromData.append('photo',photo);

        let config={
            headers:{'content-type':'multipart/form-data'}
        }
        Axios.post(url,myFromData,config).then((response)=>{
            if (response.data==1){

                toast.success('Add Success!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                });

                this.addNewModalClose();
               this.componentDidMount();

            }
            else {
                toast.error('Delete Fail', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                });
            }

        }).catch( (error)=>{
            alert(response.data);
        });

     event.preventDefault();
    }


    componentDidMount() {
        Axios.get('/ReviewList').then((resposns)=>{

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
            Axios.post("/ReviewDelete",{id:this.state.rowDataID}).then((response)=>{
                if (response.data==1 && response.status==200){
                    this.setState({delete:'Delete'})
                    this.componentDidMount();

                    toast.success('Delete Success!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: 0,
                    });

                }
                else {
                    this.setState({delete:'Delete '})
                    toast.error('Delete Fail', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: 0,
                    });

                }

            }).catch(error=>{

                this.setState({delete:'Delete '})
                toast.error('Delete Faile', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: 0,
                });

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
                {dataField: 'client_img', text:'Client Img',formatter:this.imgFormating},
                {dataField: 'client_title', text:'Client Title'},
                {dataField: 'client_description', text:'Description'}
            ];
            const  selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataID:row['id']});
                }
            }
            return (
                <Fragment>
                    <Menu title='Client Review'>
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


                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            {/* Same as */}
                            <ToastContainer />
                        </Container>
                    </Menu>

                    <Modal show={this.state.AdNewModal} onHide={this.addNewModalClose}>
                        <Modal.Header closeButton>
                            <h6>Add New Review</h6>
                        </Modal.Header>
                        <Modal.Body>

                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Review Title</Form.Label>
                                    <Form.Control onChange={this.titleOnChang} type="text" placeholder="Review" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Review Description</Form.Label>
                                    <Form.Control onChange={this.desOnChang}  type="text" placeholder="Description" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Client Image</Form.Label>
                                    <Form.Control onChange={this.fileOnChang}  type="file" placeholder="Client Image" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.addNewModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }
    }
}

export default ClientReviewPage;
