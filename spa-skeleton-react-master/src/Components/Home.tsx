import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-12 text-center">
            <h1>Welcome to the Help Desk System</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 text-center">
            <img src="images/welcome.png" />
          </Col>
        </Row>
      </Container>
    )
  }
}
