import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import recipe from "../../assets/recipe.png";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);        
                            
  return (
    <nav className="nav flex-div">
      <img className="logo" src={recipe} alt="logo" />

      <div className="search-box">
        <input type="text" placeholder="Search your fav recipe here..." />
        <button>Search</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      <div className={`bar ${menuOpen ? "open" : ""}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink 
          to="/categories" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Categories
        </NavLink>

        <NavLink 
          to="/saved" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Saved
        </NavLink>

        <NavLink 
          to="/signin" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Sign-in
        </NavLink>

        <NavLink 
          to="/download" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Download
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
