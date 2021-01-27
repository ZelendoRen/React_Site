import React from 'react';
import { Button } from '@material-ui/core';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../styles/slyder_styles.css'
import '../../styles/slyder_animations.css'
import image1 from "../../img/13.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";


const content = [
    { title: 'Агентсво Love Forever', description: 'Лучшее место для начала своей карьеры в брачном бизнесе. Развивайся и зарабатывай вместе с нами!', image: image1, button: 'Подробнее' },
    { title: 'Бесплатные фотосессии', description: 'Регулярные есплатные фотосессии и подарки от поклонников, для всех наших клиенток', image: image3, button: 'Подробнее' },
    { title: 'Работа в Love Forever', description: 'Это приятная команда и чувство стабильности. Стань частью команды переводчиков и начни зарабатывать вместе с нами прямо сейчас', image: image2, button: 'Подробнее' },

];

function slider() {
    return (<div>
        <Slider className="slider-wrapper" autoplay={3000}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <Button variant="contained" color="primary">
                            Подробнее
                  </Button>
                    </div>
                </div>
            ))}
        </Slider>
    </div>);
}
export default slider