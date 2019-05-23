import React, { Component } from 'react';
import Popup from './Popup';
import Project from './Project';



class ProjectsSection extends Component {
    render() {
        return (
            <div className="project-section">
                <div className="title-box">
                    <h1 className="title">projekty</h1>
                </div>
                <div className="projects">
                    <Project id='1' />
                    <Project id='2' />
                    <Project id='3' />
                    <Project id='3' />
                    <Project id='1' />
                    <Project id='2' />
                </div>
                <Popup />

            </div>
        )
    };
}

export default ProjectsSection;