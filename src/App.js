import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import Header from './header/Header';
import AboutSection from './aboutSection/AboutSection';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Header/>
                <AboutSection/>
            </div>
        );
    }
}
export default App;