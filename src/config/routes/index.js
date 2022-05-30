import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmark from "../../pages/bookmarked";
import Home from "../../pages/home";

const Router = () => {
  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify([]));
    return;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarked" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
