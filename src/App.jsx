import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Listing from "./components/ArticlesList/Listing.jsx";
import DetailedNews from "./components/Cards/DetailedNews.jsx";
import Favourites from "./components/ArticlesList/Favourites.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/Not Found/notFound.jsx";
const App = () => {
  return (
    <Router>
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/:id" element={<DetailedNews />} />
        <Route path="*" element={<NotFound text="Page Not Found (404)" />} />
      </Routes>
    </Router>
  );
};

export default App;
