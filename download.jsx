import React from "react";
import "./download.css";


const Download = () => {
  return (
    <div className="download-section">
      <h2>Get the Yumify.com App</h2>
      <p>Get your favorite recipes anytime, anywhere!</p>

      <div className="download-box">
        <div className="playstore-btn">
        
          <div>
            <p className="play-text">GET IT ON</p>
             <i class="fa-solid fa-play play-icon"></i>
            <h4>Google Play</h4>
          </div>
        </div>

        <div className="app-info">
          <p className="downloads">1M+ Downloads</p>
          <div className="reviews">
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star-half-stroke star half"></i>
            <span>4.8 (25k Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
