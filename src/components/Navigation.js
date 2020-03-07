import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../images/logo.jpg'

const handleHamburger = () => {
    const hamburger = document.getElementById("hamburger")
    hamburger.classList.toggle("hamburger--active") 
    const navigation = document.getElementById("navigation")
    navigation.classList.toggle("navigation--active")
}

const list = [
    {name: "Start", path: "/", icon: <i className="fas fa-home"></i>},
    {name: "Wynajmen Indywidualny", path: "/wynajem-indywidualny", icon: <i className="fas fa-car"></i>},
    {name: "Kontakt", path: "/kontakt", icon: <i className="fas fa-phone"></i>

}

]

const Navigation = () => {

    const menu = list.map( item => (
        <li className="navigation__item" key={item.name}>
            <NavLink to={item.path}>{item.icon} {item.name}</NavLink>
        </li>
    ))

    return (
        <>
        <button onClick={handleHamburger} className="hamburger" id="hamburger">
            <span className="hamburger__box">
                <span className="hamburger__line"></span>
            </span>
        </button>
        <div className="navigation" id="navigation">
            <div className="imgbox">
                <img className="imgbox__img" src={img1} alt="s"/>
            </div>
            <ul className="navigation__list">
                {menu}
            </ul>
            <div className="navigation__social">
                <i className="fab fa-github"></i>
            </div>
        </div>
        </>
    )
}


export default Navigation