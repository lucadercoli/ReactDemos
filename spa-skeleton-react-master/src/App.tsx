import React, { Component } from "react";
import { AppRoutes } from "./Routes";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        {AppRoutes}
      </BrowserRouter>
    );
  }
}

export default App;
