import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppRoutes } from './Routes';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Container>
          {AppRoutes}
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;