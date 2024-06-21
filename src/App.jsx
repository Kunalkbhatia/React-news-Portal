import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Listing from "./components/ArticlesList/Listing.jsx";
import DetailedNews from "./components/Cards/DetailedNews.jsx";
import Favourites from "./components/ArticlesList/Favourites.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/:id" element={<DetailedNews />} />
      </Routes>
    </Router>
  );
};

export default App;
