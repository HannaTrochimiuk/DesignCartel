import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import Header from './header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Header/>
            </div>
        );
    }
}
export default App;