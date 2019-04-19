import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import Header from './header/Header';
import AboutSection from './aboutSection/AboutSection';
import ServicesSection from './servicesSection/ServicesSection';
import ProjectsSection from './projectsSection/ProjectsSection';
import Contact from './contact/Contact';


class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Header/>
                <AboutSection/>
                <ServicesSection/>
                <ProjectsSection/>
                <Contact/>
            </div>
        );
    }
}

export default App;
