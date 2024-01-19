import './Slideland.css';
import React, { useState, useEffect } from 'react';

const SlideProtected1 = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides1");
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

        <div className="mySlides1">
          <div className="numbertext">1 / 6</div>
          <img
            src="https://www.mei.edu/sites/default/files/styles/featured_image_article/public/Tiran%2520Island_0_1.jpg?itok=xd7TNf-e"
            style={{ width: "100%", height:"500px" }}
            alt={'1'}
          />
          <div className="textttt">1</div>
        </div>

        <div className="mySlides1 ">
          <div className="numbertext">2 / 6</div>
          <img
            src="https://www.afrik21.africa/wp-content/uploads/2022/11/%C2%A9-Erica-ChialeShutterstock-800x400.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />        
          <div className="textttt">2</div>
        </div>

        <div className="mySlides1">
          <div className="numbertext">3 / 6</div>
          <img
            src="https://www.israelhayom.com/wp-content/uploads/2022/05/33-2.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt={'3'}
          />
          <div className="textttt">3</div>
        </div>

        <div className="mySlides1 ">
          <div className="numbertext">4 / 6</div>
          <img
            src="https://cdn.getyourguide.com/img/tour/6318944a471f4.jpeg/97.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">4</div>
        </div>

        <div className="mySlides1 ">
          <div className="numbertext">5 / 6</div>
          <img
            src="https://www.mei.edu/sites/default/files/styles/featured_image_article/public/Tiran%2520Island_0_1.jpg?itok=xd7TNf-e"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">5</div>
        </div>

        <div className="mySlides1 ">
          <div className="numbertext">6 / 6</div>
          <img
            src="https://t3.ftcdn.net/jpg/03/81/10/42/360_F_381104202_PiJH57w0TQApyIzhSrRnKkXfnkUDljk0.jpg"
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

export default SlideProtected1;
