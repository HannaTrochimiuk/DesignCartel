import ReactDOM from 'react-dom';
import React from 'react';
import './css/style.css';
import App from './App';



ReactDOM.render(<App />, document.querySelector('#app'));

var scroll = function(el){
    var element = document.querySelector(el);
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset + window.scrollY;
    console.log(offsetPosition);

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });    
}

// document.querySelector('.btn-menu-oNas').addEventListener('click', () => scroll('.about-section'));
// document.querySelector('.btn-menu-uslugi').addEventListener('click', () => scroll('.services-section'));
// document.querySelector('.btn-menu-projekty').addEventListener('click', () => scroll('.project-section'));
// document.querySelector('.btn-menu-kontakt').addEventListener('click', () => scroll('.contact'));






