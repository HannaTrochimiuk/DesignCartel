import React, { Component } from 'react';
import ValueBox from './ValueBox';
import planet from '../img/svg/planet-earth.svg';
import design from '../img/svg/design.svg';
import people from '../img/svg/people.svg';
import darkPeople from '../img/svg/dark-people.svg';
import darkDesign from '../img/svg/dark-design.svg';
import darkPlanet from '../img/svg/dark-planet-earth.svg';


class Values extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.case_0 = 'Każdy projekt powinien mieć początek w Człowieku. Projektujemy dla niego i z myślą o nim. Przestrzenie biurowe to miejsce pracy, ale też odpoczynku, spotkań, rozmów. Są miejsca wymagające dużego skupienia Pracownika, są i takie, które mają naładować akumulatory pozytywną energią. U podstaw każdego projektu jest nasze pytanie o Użytkownika danej przestrzeni. Kto to jest? Ile ma lat? Jaki ma charakter pracy? Jaka jest jego rola w firmie? To wszystko zbieramy i dostarczamy w formie projektu dotyczącego ścian, przeszkleń, oznakowań. I personalizujemy wnętrze.'
        this.case_1 = 'Dobry projekt przede wszystkim! Jesteśmy szczęściarzami, bo nasi Klienci lubią i doceniają dobry design. Graficy mają za to dużo pracy. I świetnie! Bo dzięki temu możemy stworzyć indywidualne projekty, którymi ubieramy ściany, łączymy z oznakowaniem pomieszczeń, szyldem. Wszystko jest spójne i skrojone na miarę naszych Klientów. Dziękujemy Wam!'
        this.case_2 = 'Bardzo ważna dla nas jest równowaga. Cała nasza produkcja jest “on demand”. Każde zamówienie jest produkowane pod konkretnego Klienta. Wykonujemy pomiary, żeby uniknąć dużych zapasów na materiale. To oszczędność pieniędzy Klienta, ale robiąc to myślimy o naszej planecie, nie generując odpadów stających się śmieciami. Dbamy też o wysoką jakość używanych materiałów, żeby nasze produkty były trwałe, dlatego na większość z nich dajemy 5 lat gwarancji. Ponadto, na własnym, biurowym podwórku nie drukujemy ofert w formie papierowej ani faktur. Ograniczamy też wydruk wizytówek, nie drukujemy ulotek.'
        this.case_3 = 'Bardzo ważne jest dla nas bezpieczeństwo użytkowania naszych produktów. Przy produkcji używamy wodorozcieńczalnych , nietoksycznych farb, a podczas montażu stosujemy tylko kleje na bazie wody. Ich zapach jest delikatny i zupełnie nieszkodliwy. Na każdy materiał mamy atest jego trudnopalności i atest PZH. Chcemy, żeby nasi Klienci mieli gwarancję bezpieczeństwa.'
    }
    getValueIcon = (activeBox) => {
        // console.log('get icon: ' + activeBox);
        switch (activeBox) {
            case 0:
                return darkPeople;
            case 1:
                return darkDesign;
            case 2:
                return darkPlanet;
            case 3:
                return darkPlanet;
        }
    }

    setActiveBox = (activeBox) => {
        var deactivatedText = document.querySelector('.value-text--' + this.state.activeBox);
        document.querySelector('.value-frame').classList.remove('height-none');
        if (deactivatedText) {
            deactivatedText.classList.add('fade-out');
            deactivatedText.classList.remove('fade-in');
        }
        this.setState({
            activeBox: activeBox
            
        }, () => {
            var activatedText = document.querySelector('.value-text--' + this.state.activeBox);
            setTimeout(() => {
                if (deactivatedText) {
                    deactivatedText.classList.add('display-none');
                }
                activatedText.classList.remove('fade-out');
                activatedText.classList.remove('display-none');
    
                activatedText.classList.add('fade-in');
            }, 280);
        });
    }

    render() {
        return (
            <div>
                <div className="values">
                    <ValueBox
                        className={this.state.activeBox == 0 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(0)}
                        iconDark={darkPeople}
                        iconWhite={people}
                        title='Człowiek w przestrzeni' />
                    <ValueBox
                        className={this.state.activeBox == 1 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(1)}
                        iconDark={darkDesign}
                        iconWhite={design}
                        title='Design' />
                    <ValueBox
                        className={this.state.activeBox == 2 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(2)}
                        iconDark={darkPlanet}
                        iconWhite={planet}
                        title='Zero waste' />
                    <ValueBox
                        className={this.state.activeBox == 3 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(3)}
                        iconDark={darkPeople}
                        iconWhite={planet}
                        title='Eco Friendly' />

                    {/* <div className="line" />
                <div className="value-frame">
                    <img className="value-frame-icon" src={this.getValueIcon(this.state.activeBox)} />
                    <div className='value-text'>{this.getValueText(this.state.activeBox)}</div>
                </div>
                <div className="line" /> */}

                </div>
               
                <div className="value-frame height-none">
                
                    <div className='value-text value-text--0 display-none'>{this.case_0}</div>
                    <div className='value-text value-text--1 display-none'>{this.case_1}</div>
                    <div className='value-text value-text--2 display-none'>{this.case_2}</div>
                    <div className='value-text value-text--3 display-none'>{this.case_3}</div>
                </div>
                
               
            </div>
        )
    };
}

export default Values;
