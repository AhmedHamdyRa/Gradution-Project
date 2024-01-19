import './Slideland.css';
import React, { useState, useEffect } from 'react';

const SlideProtected5= () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides5");
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

        <div className="mySlides5">
          <div className="numbertext">1 / 6</div>
          <img
            src="https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/06/Saluga-and-Ghazal-protected-area.jpg?fit=900%2C500&ssl=1"
            style={{ width: "100%", height:"500px" }}
            alt={'1'}
          />
          <div className="textttt">1</div>
        </div>

        <div className="mySlides5">
          <div className="numbertext">2 / 6</div>
          <img
            src="https://www.etltravel.com/wp-content/uploads/2021/11/saluga-and-ghazal-islands-aswan-053.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />        
          <div className="textttt">2</div>
        </div>

        <div className="mySlides5">
          <div className="numbertext">3 / 6</div>
          <img
            src="https://egypt.travel/media/1262/saluga-and-ghazal.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt={'3'}
          />
          <div className="textttt">3</div>
        </div>

        <div className="mySlides5">
          <div className="numbertext">4 / 6</div>
          <img
            src="https://www.etltravel.com/wp-content/uploads/2021/11/saluga-and-ghazal-islands-aswan-055.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">4</div>
        </div>

        <div className="mySlides5">
          <div className="numbertext">5 / 6</div>
          <img
            src="https://www.etltravel.com/wp-content/uploads/2011/04/saluga-ghazal-islands-6-1.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">5</div>
        </div>

        <div className="mySlides5">
          <div className="numbertext">6 / 6</div>
          <img
            src="https://www.etltravel.com/wp-content/uploads/2015/04/egypt-bird-watching-1.jpg"
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

export default SlideProtected5;
