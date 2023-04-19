// list of the main Routes
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

export const AppRoutes = (
  <React.Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<Home />} />
    </Routes>
  </React.Fragment>
);
