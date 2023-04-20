// list of the main Routes
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import TicketDetails from "./Components/TicketDetails";
import List from "./Components/List";

export const AppRoutes = (
  <React.Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<Home />} />
      <Route path="tickets" element={<List />} />
      <Route path="tickets/:id" element={<TicketDetails />} />
    </Routes>
    <Routes>
      <Route path="/about" element={<Home />} />
      <Route path="tickets/:id" element={<List />} />
    </Routes>
  </React.Fragment>
);
