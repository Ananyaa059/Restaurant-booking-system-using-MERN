import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img
                src="/public/img7.jpg"
                alt="img7"
                style={{ borderRadius: 15 }}
              />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/public/threelines.svg" alt="three" />
              </div>
              <img src="/public/logo.svg" alt="logo" className="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img
              src="/public/img10.jpg"
              alt="img10"
              style={{ borderRadius: 15 }}
            />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
