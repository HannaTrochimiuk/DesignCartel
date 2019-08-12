import React, { Component } from 'react';
import Popup from './Popup';
import Project from './Project';
import ProjectService from '../common/ProjectService';
import GalleryService from '../common/GalleryService';
import arrowDown from '../img/svg/back.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



class ProjectsSection extends Component {
    constructor() {
        super();
        this.projectService = new ProjectService();
        this.projects = this.projectService.getProjects();
        this.galleryService = new GalleryService();
        this.gallery = this.galleryService.getGallery();
        this.showProjects = this.showProjects.bind(this);

        this.test = this.projectService.getProjectsFromBackend();

        this.state = {
            selectedProject: this.projects[0],
            selectedGallery: this.gallery[0],
            projectsVisible: false,
            popupAppear: false
        }
    }
    showPopup = (index) => {
        this.setState({
            selectedProject: this.projects[index],
            selectedGallery: this.gallery[index],
            index: index,
            popupAppear: true
        })
    }
    closePopup = () => {
        this.setState({
            popupAppear: false
        })
    }
    showProjects() {
        this.setState({ projectsVisible: !this.state.projectsVisible });
    }

    visibleProjects = () => {
        var projectsCount = this.state.width < 400 ? 3 : 6;

        return this.state.projectsVisible ? this.projects : this.projects.slice(0, projectsCount);

    }

    updateWindowDimension = () => {
        this.setState({ width: window.innerWidth });
    }
    componentDidMount() {
        this.updateWindowDimension();
        window.addEventListener('resize', this.updateWindowDimension);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
    }

    render() {
        return (
            <div className="project-section">
                <div className="title-box">
                    <h1 className="title">projekty</h1>
                </div>
                <div className="projects">
                    {
                        this.visibleProjects().map((project, index) => {
                            return <Project projekt={project} onSelected={() => { this.showPopup(index) }} />
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
                        gallery={this.state.selectedGallery}
                        id={this.state.selectedProject.id}
                        title={this.state.selectedProject.title}
                        description={this.state.selectedProject.description}
                        closing={this.closePopup}
                    />
                </CSSTransition>
                    
            </div>
        )
    };
}

export default ProjectsSection;