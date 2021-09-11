import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsCon from "../components/TermsCondition/TermsCon";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Hamidur Terms Condition"/>
                <PageTop pagetitle="Terms and Condition "/>
                <TermsCon/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;