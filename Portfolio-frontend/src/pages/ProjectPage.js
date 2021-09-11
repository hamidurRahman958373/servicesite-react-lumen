import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetail from "../components/ProjectDetails/ProjectDetail";

class ProjectPage extends Component {

    constructor({match}) {
        super();
        this.state={
            projectPassID:match.params.projectID,
            projectName:match.params.projectName
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Hamidur Project"/>
                <PageTop pagetitle={this.state.projectName}/>
                <ProjectDetail id={this.state.projectPassID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectPage;