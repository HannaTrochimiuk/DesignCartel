import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import Header from './header/Header';
import AboutSection from './aboutSection/AboutSection';
import ServicesSection from './servicesSection/ServicesSection';
import ProjectsSection from './projectsSection/ProjectsSection';
import Contact from './contact/Contact';
import {IntlProvider} from 'react-intl';
import messages_pl from "./common/pl.json";
import messages_en from "./common/en.json";

class App extends Component {
    constructor(){
        super();
        App.language="pl";
        this.state = {
            language:"pl"
        }
    }
    messages = {
        'pl': messages_pl,
        'en': messages_en
    };
    toggleLanguage = () => {
        const newLanguage = this.state.language=="pl" ? "en" : "pl";
        App.language = newLanguage;
        this.setState({
            language:newLanguage
        })
    }
    render() {
        return (
            <IntlProvider locale={this.state.language} messages={this.messages[this.state.language]}>
                <NavigationBar />
                <Header toggleLanguage = {this.toggleLanguage}/>
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <Contact />
            </IntlProvider>
        );
    }
}

export default App;
