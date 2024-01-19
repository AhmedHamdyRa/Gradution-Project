import './Slideshow.css';
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    let newSlideIndex = n;

    if (n > slides.length) {
      newSlideIndex = 1;
    } else if (n < 1) {
      newSlideIndex = slides.length;
    }

    setSlideIndex(newSlideIndex);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newSlideIndex - 1].style.display = "block";
    dots[newSlideIndex - 1].className += " active";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="slideshow-container">

        <div className="mySlides ">
          <div className="numbertext">1 / 6</div>
          <a href="https://www.egypttoday.com/Article/1/123594/Egypt-is-looking-to-obtain-international-license-for-exporting-recycled">
          <img
            src="https://www.egypttoday.com/siteimages/Larg/20230406060323323.jpg"
            style={{ width: "100%", height:"500px" }}
            alt={'1'}
          />
          </a>
          <div className="texttt">Egyptian Minister of Environment meets with Manal Saleh, the Chief Executive Officer (ECO) at Egyptian Clothing Bank...</div>
        </div>

        <div className="mySlides ">
          <div className="numbertext">2 / 6</div>
          <a href="https://www.egypttoday.com/Article/1/122086/Egypt-implements-largest-recycling-project-to-combat-climate-change-reduce">
          <img
            src="https://www.egypttoday.com/siteimages/Larg/202201200322442244.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          </a>
          <div className="texttt">Egypt implements largest recycling project to combat climate change, reduce emissions...</div>
        </div>

        <div className="mySlides ">
          <div className="numbertext">3 / 6</div>
          <a href="https://www.egypttoday.com/Article/1/124149/Jordanian-princess-s-visit-to-Egypt-crucial-for-promising-environmental">
          <img
            src="https://www.egypttoday.com/siteimages/Larg/202305040529162916.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt={'3'}
          />
          </a>
          <div className="texttt">Egyptian Minister of Environment Yasmine Fouad, on May 4, 2023, received Jordanian Princess Alia bint al Hussei...</div>
        </div>

        <div className="mySlides ">
          <div className="numbertext">4 / 6</div>
          <a href="https://www.egypttoday.com/Article/1/124397/Environment-Ministry-celebrates-Int-l-Day-of-Bird-Migration-at">
          <img
            src="https://www.egypttoday.com/siteimages/Larg/202305160940424042.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          </a>
          <div className="texttt">Environment Ministry celebrates Int'l Day of Bird Migration at Ashtoum el-Gamil reserve...</div>
        </div>

        <div className="mySlides ">
          <div className="numbertext">5 / 6</div>
          <a href="https://www.egypttoday.com/Article/1/121577/7-highlights-of-Egypt-s-Waste-50-by-2050-initiative">
          <img
            src="https://www.egypttoday.com/siteimages/Larg/202212270226222622.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          </a>
          <div className="texttt">7 highlights of Egypt's 'Waste 50 by 2050' initiative in Africa...</div>
        </div>

        <div className="mySlides ">
          <div className="numbertext">6 / 6</div>
          <a href="https://www.egypttoday.com/Tag/12/environment">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/947/357/desktop-wallpaper-gaussian-blur-high-definition-fullscreen-blur.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          </a>
          <div className="texttt">For More News... </div>
        </div>



        <a className="prev" onClick={() => plusSlides(-1)} href>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)} href>
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(6)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
