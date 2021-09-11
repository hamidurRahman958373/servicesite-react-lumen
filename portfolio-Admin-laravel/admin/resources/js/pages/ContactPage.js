import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from 'axios';
import {Col, Container, Row} from "react-bootstrap";
import Loading from "../components/Loading";
import WentWrong from "../components/wentWrong";
class ContactPage extends Component {
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
    }
 componentDidMount() {
      Axios.get('/ContactList').then((resposns)=>{

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
               Axios.post("/ContactDelete",{id:this.state.rowDataID}).then((response)=>{
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
                {dataField: 'name', text:'name'},
                {dataField: 'email', text:'email'},
                {dataField: 'message', text:'message'}
            ];
            const  selectRow={
                  mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                      this.setState({rowDataID:row['id']});
                }
            }
            return (
                <Fragment>
                    <Menu>
                        <Container>
                            <h1>Contact list</h1>
                            <Row>
                                <Col lg={12} sm={12} md={12}>
                                    <button onClick={this.dataDelete} className=' btn btn-danger'> {this.state.delete}</button>
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
                </Fragment>
            );
        }
    }
}

export default ContactPage;
