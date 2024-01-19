import './Slideland.css';
import React, { useState, useEffect } from 'react';

const SlideProtected2 = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides2");
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

        <div className="mySlides2">
          <div className="numbertext">1 / 6</div>
          <img
            src="https://english.ahram.org.eg/Media/News/2022/6/7/41_2022-637902351358686172-868.jpg"
            style={{ width: "100%", height:"500px" }}
            alt={'1'}
          />
          <div className="textttt">1</div>
        </div>

        <div className="mySlides2">
          <div className="numbertext">2 / 6</div>
          <img
            src="https://www.medwetculture.org/wp-content/uploads/2016/02/Fishermen-and-their-gear-Bardawil-Lake-Zaranik-M.Nada-Medasset-CC.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />        
          <div className="textttt">2</div>
        </div>

        <div className="mySlides2">
          <div className="numbertext">3 / 6</div>
          <img
            src="https://www.presidency.eg/media/106320/2jpg.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt={'3'}
          />
          <div className="textttt">3</div>
        </div>

        <div className="mySlides2">
          <div className="numbertext">4 / 6</div>
          <img
            src="https://egyptopia.com/shared/images/z/middle/z_zaranik-_2960.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">4</div>
        </div>

        <div className="mySlides2">
          <div className="numbertext">5 / 6</div>
          <img
            src="https://bedawi.com/____impro/1/onewebmedia/Why-Sinai-001-BEDAWI.COM.jpg?etag=%2223c3f-54a5c364%22&sourceContentType=image%2Fjpeg&quality=85"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">5</div>
        </div>

        <div className="mySlides2">
          <div className="numbertext">6 / 6</div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Egypt.A2003036.0840.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">6 </div>
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

export default SlideProtected2;
