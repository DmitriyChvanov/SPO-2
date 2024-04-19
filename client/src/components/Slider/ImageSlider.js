import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css';



import image1 from '../../assets/img/omg1.png'
import image2 from '../../assets/img/omg2.png'
import image3 from '../../assets/img/omg3.png'
import image4 from '../../assets/img/omg4.png'
import image5 from '../../assets/img/omg5.png'

const images = [
    { src: image1, text: 'RECAP V', link: 'link1' },
    { src: image2, text: 'RECAP O', link: 'link2' },
    { src: image3, text: 'RECAP Z', link: 'link3' },
    { src: image4, text: 'RECAP X', link: 'link4' },
    { src: image5, text: 'RECAP Y', link: 'link5' },

];

const ImageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                centerMode
                centerSlidePercentage={33.33}
                infiniteLoop={true}
                selectedItem={activeIndex}
                onChange={onChange}
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <a href={image.link}>
                            <img src={image.src} alt={image.text} className={`carousel-image ${index === activeIndex ? 'active' : ''}`} />
                            {image.text && <div className="carousel-text">{image.text}</div>}
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;
