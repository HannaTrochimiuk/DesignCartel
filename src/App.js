import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import Header from './header/Header';
import AboutSection from './aboutSection/AboutSection';
import ServicesSection from './servicesSection/ServicesSection';
import ProjectsSection from './projectsSection/ProjectsSection';
import Contact from './contact/Contact';
import { IntlProvider } from 'react-intl';
// import messages_pl from "./common/pl.json";
// import messages_en from "./common/en.json";
import TextService from './common/TextService'
const axios = require('axios');

class App extends Component {
    constructor() {
        super();
        this.textService = new TextService();
        App.language = "pl";
        App.toggleLanguage= this.toggleLanguage;
        this.state = {
            language: "pl"
        }
    }
    componentDidMount = async () => {
        var messages = await this.textService.getTextFromBackend();
        this.setState({ messages: messages });
    }  
    toggleLanguage = () => {
        const newLanguage = this.state.language == "pl" ? "en" : "pl";
        App.language = newLanguage;
        this.setState({
            language: newLanguage
        })
    }
    render() {
        if (this.state.messages) {
            return (
                <IntlProvider locale={this.state.language} messages={this.state.messages[this.state.language]}>
                    <NavigationBar />
                    <Header  />
                    <AboutSection />
                    <ServicesSection />
                    <ProjectsSection />
                    <Contact />
                </IntlProvider>
            );
        } else {
            return (<div />);
        }
    }
}

export default App;
