import React from 'react';
import './ImageSliderAutoCarouselCSS.css';
import img1 from "../../../public/assets/images/office/mercury-office-official.jpeg"
import img2 from "../../../public/assets/images/office/2.jpeg"
import img3 from "../../../public/assets/images/office/3.jpeg"
import img4 from "../../../public/assets/images/office/4.jpeg"
import img5 from "../../../public/assets/images/office/5.jpeg"
import img6 from "../../../public/assets/images/office/6.jpeg"
import img7 from "../../../public/assets/images/office/7.jpeg"
import img8 from "../../../public/assets/images/office/8.jpeg"
import img9 from "../../../public/assets/images/office/9.jpeg"
import img10 from "../../../public/assets/images/office/10.jpeg"

const ImageSliderAutoCarousel: React.FC = () => {
  return (
    <>
      <section className="mt:-80 max-parent-grid-container-width m-auto">
        <div className="img-slider">
          <div className="slide active">
            <img src={img1.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img2.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img3.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img4.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img5.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img6.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img7.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img8.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img9.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img10.src} alt="" loading="lazy" />
          </div>

          <div className="navigation">
            <div className="btn active" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            {/*<div class="btn"></div>*/}
          </div>
        </div>
      </section>
      {/* image slider ends */}
    </>
  );
};

export default ImageSliderAutoCarousel;
