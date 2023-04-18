import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppRoutes } from './Routes';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '3759d2b0-c01c-466d-85ed-82a223cbbb8a'
  /* ...Other Configuration Options... */
} });

appInsights.loadAppInsights();

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