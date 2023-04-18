import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-12 text-center">
            <h1>About the application ...</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 text-center">
            Powered by <img src="images/logo.jpg" />
          </Col>
        </Row>
      </Container>
    )
  }
}
