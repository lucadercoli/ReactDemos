import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
import TopicsSubOne from "./TopicsSubOne";
// import TopicsSubTwo from "./TopicsSubTwo";

export default class Topics extends Component<any, any> {
  render() {
    return (
      <div>
        <h1>Topics</h1>
        <ul>
          <li>
            <Link to={"subone"}>Subone</Link>
          </li>
          <li>
            <Link to={"details/1"}>Topic #1</Link>
          </li>
          <li>
            <Link to={"details/13"}>Topic #13</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    );
  }
}
