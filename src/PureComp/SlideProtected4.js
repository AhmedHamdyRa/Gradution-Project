import './Slideland.css';
import React, { useState, useEffect } from 'react';

const SlideProtected4= () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides4");
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

        <div className="mySlides4">
          <div className="numbertext">1 / 6</div>
          <img
            src="https://bestoffers.travel/UploadFiles/NewsPhoto/14141883_10208514438956301_7560332794037650142_n.jpg"
            style={{ width: "100%", height:"500px" }}
            alt={'1'}
          />
          <div className="textttt">1</div>
        </div>

        <div className="mySlides4">
          <div className="numbertext">2 / 6</div>
          <img
            src="https://bestoffers.travel/UploadFiles/NewsPhoto/14067445_10208514438036278_1204938084353846752_n.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />        
          <div className="textttt">2</div>
        </div>

        <div className="mySlides4">
          <div className="numbertext">3 / 6</div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Testudo_kleinmanni_at_Omayed_Protected_Area_%2C_photo_by_Hatem_Moushir_32.jpg/640px-Testudo_kleinmanni_at_Omayed_Protected_Area_%2C_photo_by_Hatem_Moushir_32.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt={'3'}
          />
          <div className="textttt">3</div>
        </div>

        <div className="mySlides4">
          <div className="numbertext">4 / 6</div>
          <img
            src="https://img.youm7.com/large/201609130831583158.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">4</div>
        </div>

        <div className="mySlides4">
          <div className="numbertext">5 / 6</div>
          <img
            src="https://www.agri2day.com/wp-content/uploads/2017/08/%D9%85%D8%AD%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D8%AF-6.jpg"
            style={{ width: "100%" , height:"500px" }}
            alt={'2'}
          />
          <div className="textttt">5</div>
        </div>

        <div className="mySlides4">
          <div className="numbertext">6 / 6</div>
          <img
            src="https://img.youm7.com/large/s720102814152.jpg"
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

export default SlideProtected4;
