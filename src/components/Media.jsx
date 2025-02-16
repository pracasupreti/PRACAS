import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AP1 from "../assets/Media/ap1.png";
import ArthaSarokar from "../assets/Media/artha-sarokar.png";
import Baahrakhari from "../assets/Media/12khari.png";
import Bizshala from "../assets/Media/bizshala.png";
import DeshSanchar from "../assets/Media/deshsanchar.png";
import Kendrabindu from "../assets/Media/kendrabindu.png";
import Nagarik from "../assets/Media/nagarik.png";
import NayaPatrika from "../assets/Media/nayapatrika.png";
import NepalTelevision from "../assets/Media/nepaltelevision.png";
import OnlineKhabar from "../assets/Media/onlinekhabar.png";
import Ratopati from "../assets/Media/ratopati.png";
import Setopati from "../assets/Media/setopati.png";

const mediaInfo = [
  {
    title: "AP1 HD",
    img: AP1,
    link: "https://www.youtube.com/watch?v=BM9yTsfkgb4",
  },
  {
    title: "Artha Sarokar",
    img: ArthaSarokar,
    link: "https://arthasarokar.com/2018/11/sriyog-.html",
  },
  {
    title: "Baahrakhari",
    img: Baahrakhari,
    link: "https://baahrakhari.com/detail/216093",
  },
  {
    title: "Bizshala",
    img: Bizshala,
    link: "https://old.bizshala.com/story/%E0%A4%86%E0%A4%87%E0%A4%8F%E0%A4%AE%E0%A4%88-%E0%A4%AA%E0%A5%87-%E0%A4%B0-13",
  },
  {
    title: "Desh Sanchar",
    img: DeshSanchar,
    link: "https://deshsanchar.com/2023/02/10/761100/",
  },
  {
    title: "Kendrabindu",
    img: Kendrabindu,
    link: "https://kendrabindu.com/others/39670/",
  },
  {
    title: "Nagarik",
    img: Nagarik,
    link: "https://shukrabar.nagariknetwork.com/news/5321",
  },
  {
    title: "Naya Patrika",
    img: NayaPatrika,
    link: "https://nayapatrikadaily.com/news-details/107044/2023-02-09",
  },
  {
    title: "Nepal Television",
    img: NepalTelevision,
    link: "https://www.youtube.com/watch?v=U2YBTuQbAHg",
  },
  {
    title: "Online Khabar",
    img: OnlineKhabar,
    link: "https://www.onlinekhabar.com/2019/01/733498",
  },
  {
    title: "Ratopati",
    img: Ratopati,
    link: "https://www.ratopati.com/story/345665",
  },
  {
    title: "Setopati",
    img: Setopati,
    link: "https://www.setopati.com/kinmel/employment/189754",
  },
];

const prepareSlides = (data, imagesPerSlide = 10) => {
  let slides = [];
  for (let i = 0; i < data.length; i++) {
    let slide = [];
    for (let j = 0; j < imagesPerSlide; j++) {
      slide.push(data[(i + j) % data.length]);
    }
    slides.push(slide);
  }
  return slides;
};

export const Media = () => {
  const slides = prepareSlides(mediaInfo);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="container mx-auto py-10 relative">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        interval={null}
        slide={true}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center gap-4 mb-3">
                {slide.slice(0, 5).map((site, i) => (
                  <a
                    key={i}
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={site.img}
                      alt={site.title}
                      className="img-fluid"
                      style={{ maxHeight: "120px" }}
                    />
                  </a>
                ))}
              </div>

              <div className="d-flex justify-content-center gap-4">
                {slide.slice(5, 10).map((site, i) => (
                  <a
                    key={i}
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={site.img}
                      alt={site.title}
                      className="img-fluid"
                      style={{ maxHeight: "120px" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <button
        className="position-absolute top-50 start-0 translate-middle-y p-2"
        style={{
          left: "20px",
          zIndex: 10,
          fontSize: windowWidth > 1200 ? "50px" : "35px",
          color: "brown",
          fontWeight: "bold",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handlePrev}
      >
        ❮
      </button>

      <button
        className="position-absolute top-50 end-0 translate-middle-y border-0 p-2"
        style={{
          right: "20px",
          zIndex: 10,
          fontSize: windowWidth > 1200 ? "50px" : "35px",
          color: "brown",
          fontWeight: "bold",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};
