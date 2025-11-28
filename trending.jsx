import React from "react";
import { useNavigate } from "react-router-dom";
import dish9 from "../../assets/dish9.avif";
import dish8 from "../../assets/dish8.avif";
import dish10 from "../../assets/dish10.avif";
import dish11 from "../../assets/dish11.avif";
import dish12 from "../../assets/dish12.avif";
import dish13 from "../../assets/dish13.avif";
import dish17 from "../../assets/dish17.avif";
import dish15 from "../../assets/dish15.avif";
import "./trending.css";

const Trending = () => {
  const navigate = useNavigate();

  const dishes = [
    { img: dish9, name: "Salad", time: "1 hr", level: "Medium" },
    { img: dish8, name: "Cauliflower", time: "30 min", level: "Easy" },
    { img: dish10, name: "Samosa", time: "45 min", level: "Hard" },
    { img: dish11, name: "Idli", time: "20 min", level: "Easy" },
    { img: dish12, name: "Pav-Bhaji", time: "25 min", level: "Medium" },
    { img: dish13, name: "Momo", time: "40 min", level: "Medium" },
    { img: dish17, name: "Chicken-wings", time: "15 min", level: "Easy" },
    { img: dish15, name: "Appe", time: "1.5 hr", level: "Hard" },
  ];

  const handleClick = (dish) => {
    navigate(`/recipe/${dish.name}`);
  };

  return (
    <div className="main-container">
      {dishes.map((dish, index) => (
        <div className="suggestions" key={index}>
          {/* click event yahan add kiya */}
          <img
            src={dish.img}
            alt={dish.name}
            className="dishes"
            onClick={() => handleClick(dish)}
          />
          <div className="dish-info">
            {/* <div className="left-info1">
              <i className="fa-solid fa-clock"></i> {dish.time}
            </div>
            <div className="left-info2">
              <i className="fa-solid fa-star"></i> {dish.level}
            </div> */}
            <div className="center-info">{dish.name}</div>
            <div className="right-info">
              <i className="fa-solid fa-bookmark"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
