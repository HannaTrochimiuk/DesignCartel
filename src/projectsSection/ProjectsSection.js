import React, { Component } from 'react';
import Popup from './Popup';
import Project from './Project';
import ProjectService from '../common/ProjectService';
import GalleryService from '../common/GalleryService';
import arrowDown from '../img/svg/back.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {FormattedMessage} from 'react-intl'




class ProjectsSection extends Component {
    constructor() {
        super();
        this.projectService = new ProjectService();
        this.state = {
            projectsVisible: false,
            popupAppear: false
        }
    }
    showPopup = (project) => {
        this.setState({
            selectedProject: project,
            popupAppear: true
        })
    }
    closePopup = () => {
        this.setState({
            popupAppear: false
        })
    }
    showProjects = () => {
        this.setState({ projectsVisible: !this.state.projectsVisible });
    }

    visibleProjects = () => {
        var projectsCount = this.state.width < 400 ? 3 : 6;

        return this.state.projectsVisible ? this.state.projects : this.state.projects.slice(0, projectsCount);

    }

    updateWindowDimension = () => {
        this.setState({ width: window.innerWidth });
    }
    componentDidMount() {
        this.updateWindowDimension();
        window.addEventListener('resize', this.updateWindowDimension);
        this.projectService.getProjectsFromBackend()
            .then((data) => {
                this.setState({
                    projects: data,
                    selectedProject: data.length > 0 ? data[0] : null
                });
            });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
    }

    render() {
        if (!this.state.projects) {
            return (<div>Loading</div>);
        }
        return (
            <div className="project-section">
                <div className="title-box">
                    <h1 className="title">
                        <FormattedMessage id="menuProjects"/>

                    </h1>
                </div>
                <div className="projects">
                    {
                        this.visibleProjects().map((project) => {
                            return <Project project={project} onSelected={() => { this.showPopup(project) }} />
                        })
                    }
                </div>
                <button className='show-projects-btn' onClick={this.showProjects}>
                    <img className={this.state.projectsVisible ? 'arrow flip' : 'arrow'} src={arrowDown} />
                </button>

                <CSSTransition
                    timeout={500}
                    classNames='fade'
                    in={this.state.popupAppear}
                    appear={true}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Popup
                        project={this.state.selectedProject}
                        closing={this.closePopup}
                    />
                </CSSTransition>

            </div>
        )
    };
}

export default ProjectsSection;