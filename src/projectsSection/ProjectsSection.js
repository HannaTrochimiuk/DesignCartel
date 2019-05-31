import React, { Component } from 'react';
import Popup from './Popup';
import Project from './Project';
import Gallery from './Gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import foto1 from '../img/room.jpg';
import foto2 from '../img/room-bw.jpg';
import foto3 from '../img/foto-1.jpg'
import foto4 from '../img/foto-2.jpg';
import foto5 from '../img/foto-3.jpg';

const data=[{
    id:1,
    foto:foto1,
    descriptin:'Sala konferencyjna Hol. Ciąg komunikacyjny. Strefa relaksu. Printing Point.',
    title: 'Odważny'
}]

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
                    <Project props={data[0]} />
                    
                </div>
                <Popup />
                {/* <Gallery/> */}
                
                

            </div>
        )
    };
}

export default ProjectsSection;