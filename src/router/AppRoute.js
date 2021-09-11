import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import Refundpage from "../pages/Refundpage";
import TermsPage from "../pages/TermsPage";
import PrivecyPage from "../pages/PrivecyPage";
import ProjectPage from "../pages/ProjectPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={Refundpage}/>
                    <Route exact path="/termsCon" component={TermsPage}/>
                    <Route exact path="/privacy" component={PrivecyPage}/>
                    <Route exact path="/projectDetails/:projectID/:projectName" component={ProjectPage}/>
                    <Route exact path="/courseDetails/:courseId" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;