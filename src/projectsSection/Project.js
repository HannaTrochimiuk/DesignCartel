import React, { Component } from 'react'

class Project extends Component {
    constructor(){
        super();
    }
    showPopup = (number) => {
        document.querySelector('.popup--' + number).classList.remove('popup-hide');
    }
    render() {
        return (
            <button className="project-box" onClick={() => this.showPopup(this.props.id)}>
                <div className="project-foto project-foto--1">&nbsp;</div>
                <div className="project-text">Lorem ipsum</div>

            </button>
        )
    }
}

export default Project;