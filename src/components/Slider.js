import React, {useState} from 'react';
import ImgSlider from './ImgSlider'

import audirs from '../images/audirs7640.jpg'
import bmwm4 from '../images/bmwm4640.jpg'
import aventador from '../images/aventador640.jpg'
import mercedes from '../images/mercedes640.jpg'
import porsche from '../images/porsche-911640.jpg'
import mclaren from '../images/mclaren640.jpg'
import mustang from '../images/mustang640.jpg'
import bentley from '../images/bentley640.jpg'


const Slider = () => {

    let sliderArr = [<ImgSlider src={audirs}/>, <ImgSlider src={bmwm4} />,
        <ImgSlider src={aventador} />, <ImgSlider src={mercedes}/>,
        <ImgSlider src={porsche}/>, <ImgSlider src={mclaren} />,
        <ImgSlider src={mustang} />, <ImgSlider src={bentley} />]

    const [x, setX] = useState(0) 
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100* (sliderArr.length-1)? setX(0) : setX(x - 100);
    };

    return (

        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slider__slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <i className="fas fa-chevron-left" onClick={goLeft}></i>
            <i className="fas fa-chevron-right" onClick={goRight}></i>
        </div>
    )
}

export default Slider