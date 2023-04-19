import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
// import Details from "./Details";
import NoMatch from "./NoMatch";
import TopicsSubOne from "./TopicsSubOne";
import TopicsSubTwo from "./TopicsSubTwo";
import Demo from "./Demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* 1. Render a Router component at the top of your app. */}
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
              {/*  2. Add the Link component to link to a new location */}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            {/* Match a single route */}
            <Route path="/" element={<Home />} />
            {/* 3. Finally, render a Route to show some UI when the user visits this route */}
            <Route path="/about" element={<About />} />
            <Route path="/topics/*" element={<Topics />}>
              <Route path={"subone"} element={<TopicsSubOne />} />
              <Route path={"details/:id"} element={<TopicsSubTwo />} />
              <Route
                path={"details/:id/:pagesize"}
                element={<TopicsSubTwo />}
              />
            </Route>
            <Route path="demo">
              <Route index element={<Demo />} />
              <Route path=":param1" element={<Demo />} />
              <Route path=":param1/:param2" element={<Demo />} />
            </Route>
            {/* <Route path="/details/:id/:pageSize?" element={<Details />} /> */}
            <Route element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
