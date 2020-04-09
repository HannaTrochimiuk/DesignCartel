import React, { Component } from 'react';
import Popup from './Popup';
import Project from './Project';
import ProjectService from '../common/ProjectService';
import arrowDown from '../img/svg/back.svg';
import { CSSTransition } from 'react-transition-group';
import { FormattedMessage } from 'react-intl'

class ProjectsSection extends Component {
    constructor() {
        super();
        this.projectService = new ProjectService();
        this.state = {
            showAllProjects: false,
            showPopup: false
        }
    }
    showPopup = (project) => {
        this.setState({
            selectedProject: project,
            showPopup: true
        })
    }
    closePopup = () => {
        this.setState({
            showPopup: false
        })
    }
    showAllProjects = () => {
        this.setState({ showAllProjects: !this.state.showAllProjects });
    }


    updateWindowDimension = () => {
        var projectsCount = window.innerWidth < 400 ? 3 : 6;
        this.setState({
            visibleProjects: this.state.projects.slice(0, projectsCount),
            hiddenProjects: this.state.projects.slice(projectsCount)
        });
    }

    async componentDidMount() {
        var data = await this.projectService.getProjectsFromBackend();
        this.setState({
            projects: data
        });
        this.updateWindowDimension();
        window.addEventListener('resize', this.updateWindowDimension);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
    }

    render() {
        if (!this.state.hiddenProjects) {
            return (<div>Loading...</div>);
        }
        return (
            <div className="project-section">
                <div className="title-box">
                    <h1 className="title">
                        <FormattedMessage id="menuProjects" />
                    </h1>
                </div>
                <div className="projects">
                    {
                        this.state.visibleProjects.map((project) => {
                            return  <Project
                                key={project.name}
                                project={project}
                                onSelected={() => this.showPopup(project)} />
                        })
                    }{
                        this.state.hiddenProjects.map((project) => {
                            return (
                                <CSSTransition
                                    key={project.name}
                                    in={this.state.showAllProjects}
                                    timeout={600}
                                    classNames='appearProjects'
                                    unmountOnExit>
                                    <Project
                                        project={project}
                                        onSelected={() => this.showPopup(project)} />
                                </CSSTransition>)
                        })
                    }
                </div>
                <button className='show-projects-btn' onClick={this.showAllProjects}>
                    <img className={this.state.showAllProjects ? 'arrow flip' : 'arrow'} src={arrowDown} />
                </button>
                <Popup
                    in={this.state.showPopup}
                    project={this.state.selectedProject}
                    closing={this.closePopup} />
            </div>
        )
    };
}

export default ProjectsSection;