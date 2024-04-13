import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

import { getNews } from "../../http/axios_requests";
import { useContext,} from "react";
import { Context } from "../..";
import { useEffect } from "react";



const ImageCarousel = () => {
  
  const [news, setNews] = useState([])

  

  const { ticket } = useContext(Context);

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);
  console.log(ticket._news[1]);

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
        {news.map((news, index) => (
          <div key={news.id} className="carousel-item">
            <img
              src={"http://localhost:5000/" + news.img}
              alt={news.id}
              className={`carousel-image ${
                index === activeIndex ? "active" : ""
              }`}
            />
            {news.description && (
              <div className="carousel-text">{news.description}</div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
