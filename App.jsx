import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Box from "./Components/Box/box";
import Trending from "./Components/Trending/trending";
import Download from "./Components/Download/download";
import Footer from "./Components/Footer/footer";
import Categories from "./Components/Categories/categories";
import Recipe from "./Components/Recipe/recipe";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Box />
              <Trending />
              <Download />
              <Footer />
              
            </>
          }
        />

        <Route path="/categories" element={<Categories />} />
        <Route path="/saved" element={<h1>Saved Recipes</h1>} />
        <Route path="/signin" element={<h1>Sign In Page</h1>} />
        <Route path="/download" element={<h1>Download Page</h1>} />
        <Route path="/recipe/:name" element={<Recipe/>} />

      </Routes>
    </Router>
  );
};

export default App;
