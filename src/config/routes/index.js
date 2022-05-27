import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmark from "../../pages/bookmarked";
import Home from "../../pages/home";

const Router = () => {
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
