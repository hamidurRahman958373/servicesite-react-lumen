import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Privecy from "../components/PrivecyDes/Privecy";

class PrivecyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Hamidur Privacy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <Privecy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivecyPage;