import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

import image1 from "../../assets/img/omg1.png";
import image2 from "../../assets/img/omg2.png";
import image3 from "../../assets/img/omg3.png";
import image4 from "../../assets/img/omg4.png";
import image5 from "../../assets/img/omg5.png";
import { getNews } from "../../http/axios_requests";
import { useContext } from "react";
import { Context } from "../..";
import { useEffect } from "react";

// const images = [
//   { src: image1, text: "RECAP V", link: "link1" },
//   { src: image2, text: "RECAP O", link: "link2" },
//   { src: image3, text: "RECAP Z", link: "link3" },
//   { src: image4, text: "RECAP X", link: "link4" },
//   { src: image5, text: "RECAP Y", link: "link5" },
// ];

const ImageCarousel = () => {
  const { ticket } = useContext(Context);

  useEffect(() => {
    getNews().then((res) => ticket.setNews(res));
  }, []);
  console.log(ticket._news[0]);

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
        {ticket._news.map((news, index) => (
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
