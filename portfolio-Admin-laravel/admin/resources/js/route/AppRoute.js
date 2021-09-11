import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import CoursePage from "../pages/CoursePage";
import ServicePage from "../pages/ServicePage";
import ClientReviewPage from "../pages/ClientReviewPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/'  component={HomePage}></Route>
                    <Route exact path='/contact'  component={ContactPage}></Route>
                    <Route exact path='/project'  component={ProjectPage}></Route>
                    <Route exact path='/course'  component={CoursePage}></Route>
                    <Route exact path='/service'  component={ServicePage}></Route>
                    <Route exact path='/clientReview'  component={ClientReviewPage}></Route>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
