import React, {Component} from 'react';
import Slider from '../components/Slider'

class HomePage extends Component {

    render() {
    return (
        <div className="home">
            <div className="home__header">
                <h1 className="home__title--large">Wypożyczalnia sportowych samochodów</h1>
                <h2 className="home__title--medium">Spełniamy marzenia, wynajem na każdą kieszeń</h2>
            </div>
            <div className="offer">
                <div className="offer__cars">
                <h1 className="offer__title">Wynajem indywidualny</h1>
                </div>
            </div>
            <div className="about">
                <div className="info1">
                <h1 className="info1__us">Warunki wynajmu</h1>
                <p className="info1__text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem omnis,
                nihil dolor hic temporibus libero quod, ducimus reprehenderit,
                facilis a distinctio illum ex aspernatur voluptatem expedita
                nam atque magnam.</p>
                </div>
                <div className="info2">
                <h1 className="info2__us">O nas</h1>
                <p className="info2__text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem omnis,
                nihil dolor hic temporibus libero quod, ducimus reprehenderit,
                facilis a distinctio illum ex aspernatur voluptatem expedita
                nam atque magnam.</p>
                </div>
            </div>
            <div className="tajtl">
                <h1 className="tajtl__title">Galeria</h1>
            </div>
            <Slider />
            <div className="socials">
                <div className="socials__icon">
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <div className="footer">
                <p className="footer__author">Copyright © All rights reserved </p>
            </div>
        </div>
    )
  }
}

export default HomePage