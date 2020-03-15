import React, { Component } from 'react';

class ContactPage extends Component {

    render() { 
        return (
            <>
        <div className="wrappero">
        <div className="contact">
            <h1 className="contact__title">Kontakt</h1>
        </div>
        <div className="cntbx">
            <div className="infbx">
            <h1 className="infbx__title">SportsCars</h1>
            <p className="infbx__info">- Ul. Lorem ipsum</p>
            <p className="infbx__info">- Krakow</p>
            <p className="infbx__info">- Tel.: 222-222-222</p>
            <p className="infbx__info">- pn.-pt.:  od 0 do 0</p>
            <p className="infbx__info">- weekend.: od 0 do 0</p>
            <p className="infbx__info">- dksjsdklfdlk@gmail.com</p>
            </div>
            <div className="form">
                <h2 className="form__title">Napisz do nas!</h2>
                <h4 className="form__title">Twoje Imie*</h4>
                <input className="form__input" type="text" placeholder="Twoje imie"/>
                <h4 className="form__title">Twoj Email*</h4>
                <input className="form__input"type="email" placeholder="Twój email"/>
                <h4 className="form__title">Twoja Wiadomość*</h4>
                <textarea className="form__text"placeholder="Twoja wiadomość"name="" id="" cols="30" rows="10"></textarea>
                <button className="form__button">Wyślij</button>
            </div>
        </div>
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
        </>
          );
    }
}
 
export default ContactPage;