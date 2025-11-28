import React, { useState, useEffect } from "react";
import "./categories.css";

const Categories = () => {
  const categoryList = [
    "All",
    "Veg",
    "Non-Veg",
    "Sweets",
    "Restaurant",
    "Home-made",
    "Dinner",
    "Breakfast",
    "Lunch",
    // "Maharashtrian",
    "South-Indian",
    "Chinese",
    "Salads",
  ];

  // ✅ Category-wise manual image data (time, level alag-alag)
  const categoryImages = {
    Veg: [
      { img: "/images/veg-1.avif", name: "Paneer Masala", time: "45 min", level: "Medium" },
      { img: "/images/veg-2.avif", name: "Aloo Gobi", time: "30 min", level: "Easy" },
      { img: "/images/veg-3.avif", name: "Veg Biryani", time: "1 hr", level: "Hard" },
      { img: "/images/veg-4.webp", name: "Bhindi Fry", time: "25 min", level: "Easy" },
      { img: "/images/veg-5.avif", name: "Paneer Masala", time: "45 min", level: "Medium" },
      { img: "/images/veg-6.avif", name: "Aloo Gobi", time: "30 min", level: "Easy" },
      { img: "/images/veg-7.avif", name: "Veg Biryani", time: "1 hr", level: "Hard" },
       { img: "/images/veg-8.avif", name: "Bhindi Fry", time: "25 min", level: "Easy" },
      { img: "/images/veg-9.avif", name: "Bhindi Fry", time: "25 min", level: "Easy" },
      { img: "/images/veg-10.avif", name: "Paneer Masala", time: "45 min", level: "Medium" },
      { img: "/images/veg-11.avif", name: "Aloo Gobi", time: "30 min", level: "Easy" },
      { img: "/images/veg-12.avif", name: "Veg Biryani", time: "1 hr", level: "Hard" },
      { img: "/images/veg-13.webp", name: "Bhindi Fry", time: "25 min", level: "Easy" },
      { img: "/images/veg-14.avif", name: "Paneer Masala", time: "45 min", level: "Medium" },
      { img: "/images/veg-15.avif", name: "Aloo Gobi", time: "30 min", level: "Easy" },
      { img: "/images/veg-16.avif", name: "Veg Biryani", time: "1 hr", level: "Hard" },
      { img: "/images/veg-17.webp", name: "Bhindi Fry", time: "25 min", level: "Easy" },
      { img: "/images/veg-18.avif", name: "Veg Biryani", time: "1 hr", level: "Hard" },
     
    ],

    "Non-Veg": [
      { img: "/images/nonveg-1.avif", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-2.avif", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-3.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
       { img: "/images/nonveg-4.avif", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-5.avif", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-6.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
      { img: "/images/nonveg-7.avif", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-8.avif", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-9.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
       { img: "/images/nonveg-10.avif", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-11.avif", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-12.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
      { img: "/images/nonveg-13.webp", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-14.webp", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-15.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
       { img: "/images/nonveg-16.webp", name: "Butter Chicken", time: "1 hr", level: "Hard" },
      { img: "/images/nonveg-17.avif", name: "Egg Curry", time: "30 min", level: "Easy" },
      { img: "/images/nonveg-18.avif", name: "Fish Fry", time: "40 min", level: "Medium" },
    ],

    Sweets: [
      { img: "/images/sweet-1.avif", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-2.avif", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-3.avif", name: "Kaju Katli", time: "45 min", level: "Hard" },
      { img: "/images/sweet-4.avif", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-5.avif", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-6.avif", name: "Kaju Katli", time: "45 min", level: "Hard" },
      { img: "/images/sweet-7.avif", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-8.avif", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-9.avif", name: "Kaju Katli", time: "45 min", level: "Hard" },
      { img: "/images/sweet-10.webp", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-11.webp", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-12.webp", name: "Kaju Katli", time: "45 min", level: "Hard" },
      { img: "/images/sweet-13.avif", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-14.avif", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-15.avif", name: "Kaju Katli", time: "45 min", level: "Hard" },
      { img: "/images/sweet-16.avif", name: "Gulab Jamun", time: "35 min", level: "Easy" },
      { img: "/images/sweet-17.avif", name: "Rasgulla", time: "1 hr", level: "Medium" },
      { img: "/images/sweet-18.avif", name: "Kaju Katli", time: "45 min", level: "Hard" },
    ],

    "South-Indian": [
      { img: "/images/southindian-1.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-2.avif", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-3.avif", name: "Upma", time: "15 min", level: "Easy" },
       { img: "/images/southindian-4.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-5.webp", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-6.webp", name: "Upma", time: "15 min", level: "Easy" },
       { img: "/images/southindian-7.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-8.avif", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-9.avif", name: "Upma", time: "15 min", level: "Easy" },
      { img: "/images/southindian-10.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-11.avif", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-12.avif", name: "Upma", time: "15 min", level: "Easy" },
       { img: "/images/southindian-13.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-14.avif", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-15.avif", name: "Upma", time: "15 min", level: "Easy" },
       { img: "/images/southindian-16.avif", name: "Idli", time: "20 min", level: "Easy" },
      { img: "/images/southindian-17.avif", name: "Dosa", time: "30 min", level: "Medium" },
      { img: "/images/southindian-18.avif", name: "Upma", time: "15 min", level: "Easy" },
    ],

    Chinese: [
      { img: "/images/chinese-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-3.webp", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/chinese-4.webp", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-5avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/chinese-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/chinese-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/chinese-13.webp", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/chinese-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/chinese-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/chinese-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    Breakfast: [
      { img: "/images/breakfast-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
        { img: "/images/breakfast-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
        { img: "/images/breakfast-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/breakfast-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-11.webp", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
        { img: "/images/breakfast-13.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
        { img: "/images/breakfast-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/breakfast-17.webp", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/breakfast-18.webp", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    Lunch: [
      { img: "/images/lunch-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/lunch-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/lunch-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/lunch-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/lunch-13.webp", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/lunch-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/lunch-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/lunch-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    Dinner: [
      { img: "/images/dinner-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/dinner-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/dinner-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/dinner-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/dinner-13.webp", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/dinner-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/dinner-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/dinner-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },

    ],
    Salads: [
      { img: "/images/salad-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/salad-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/salad-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/salad-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/salad-13.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/salad-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/salad-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/salad-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    "Home-made": [
      { img: "/images/homemade-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/homemade-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-6.webp", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/homemade-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/homemade-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/homemade-13.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/homemade-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/homemade-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/homemade-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    Restaurant: [
      { img: "/images/restaurant-1.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-2.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-3.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/restaurant-4.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-5.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-6.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/restaurant-7.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-8.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-9.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
      { img: "/images/restaurant-10.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-11.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-12.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/restaurant-13.webp", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-14.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-15.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
       { img: "/images/restaurant-16.avif", name: "Noodles", time: "25 min", level: "Easy" },
      { img: "/images/restaurant-17.avif", name: "Manchurian", time: "35 min", level: "Medium" },
      { img: "/images/restaurant-18.avif", name: "Spring Roll", time: "40 min", level: "Medium" },
    ],
    

    // Baaki categories ke liye bhi aise hi add kar sakte ho...
  };

  // ✅ For "All", combine sabhi categories ke dishes
  const allImages = Object.values(categoryImages).flat();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showArrow, setShowArrow] = useState("All");

  useEffect(() => {
    setSelectedCategory("All");
    setShowArrow("All");
  }, []);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setShowArrow(null);
    } else {
      setSelectedCategory(category);
      setShowArrow(category);
    }
  };

  //  Which images to show
  const imagesToShow =
    selectedCategory === "All"
      ? allImages
      : categoryImages[selectedCategory] || [];

  return (
    <div className="categories">
      <div className="catg-items">
        {categoryList.map((cat, index) => (
          <div
            key={index}
            className={`catg ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            <span>{cat}</span>
            <i
              className={`fa-solid fa-chevron-down arrow ${
                showArrow === cat ? "show" : ""
              }`}
            ></i>
          </div>
        ))}
      </div>

      {/* ✅ Show selected category images with info below each image */}
      {selectedCategory && (
        <div className="catg-images">
          {imagesToShow.map((dish, i) => (
            <div key={i} className="catg-img-box">
              <img src={dish.img} alt={dish.name} />
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
      )}
    </div>
  );
};

export default Categories;
