import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import RestClient from "../AppUrl/RestClient";
import AppUrl from "../AppUrl/AppUrl";

class CourseDetailsPage extends Component {
     constructor({match}) {
         super();
         this.state={
             MyCourseId:match.params.courseId,
             CouseData:[]
         }
     }
    componentDidMount() {
        window.scroll(0,0)

        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
             this.setState({CouseData:result});
        }).catch(error=>{

        });

    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Hamidur Course"/>
                <CourseDetails coursData={this.state.CouseData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;