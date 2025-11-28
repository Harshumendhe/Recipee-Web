import React, { useState, useEffect } from "react";
import "./box.css";
import todayspecial from "../../assets/todayspecial.png";
import trending from "../../assets/trending.jpg";
import state from "../../assets/state.avif";
import pizza from "../../assets/pizza.avif";
import burger from "../../assets/burger.avif";
import dish1 from "../../assets/dish1.avif";
import dish2 from "../../assets/dish2.avif";
import dish3 from "../../assets/dish3.avif";
import dish4 from "../../assets/dish4.avif";
import dish5 from "../../assets/dish5.avif";
import dish6 from "../../assets/dish6.avif";
import dish7 from "../../assets/dish7.avif";

const Box = () => {
  const boxImages = [
    [todayspecial, pizza, dish1, dish2],
    [trending, burger, dish4, dish5],
    [state, dish6, dish7, dish3],
  ];

  const titles = ["Today's Special", "Trending Now", "Maharashtra Special"];
  const [currentIndexes, setCurrentIndexes] = useState(
    new Array(boxImages.length).fill(0)
  );

  // ✅ Auto slide for all boxes continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) => (index + 1) % boxImages[i].length)
      );
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = (boxIndex) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[boxIndex] = (updated[boxIndex] + 1) % boxImages[boxIndex].length;
      return updated;
    });
  };

  const prevSlide = (boxIndex) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[boxIndex] =
        (updated[boxIndex] - 1 + boxImages[boxIndex].length) %
        boxImages[boxIndex].length;
      return updated;
    });
  };

  return (
    <div className="container">
      <div className="box-wrapper">
        {boxImages.map((images, boxIndex) => (
          <div key={boxIndex} className="box">
            <div className="slider">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`slide ${
                    i === currentIndexes[boxIndex] ? "active" : ""
                  }`}
                >
                  <img src={img} alt="food" />
                </div>
              ))}

              <button className="prev" onClick={() => prevSlide(boxIndex)}>
                ❮
              </button>
              <button className="next" onClick={() => nextSlide(boxIndex)}>
                ❯
              </button>
            </div>
            <p className="title">{titles[boxIndex]}</p>
          </div>
        ))}
      </div>

      <div className="text">
        <h2>
          “From kitchen to soul — every bite tells a story.
          <br />
          Explore recipes that taste like happiness!”
        </h2>
      </div>
    </div>
  );
};

export default Box;
