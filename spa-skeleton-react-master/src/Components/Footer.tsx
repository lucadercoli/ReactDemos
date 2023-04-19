import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap';

export default class AppFooter extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
          <Container>
              <Row>
                  <Col className="col-12 text-center">
                  &copy;2019&nbsp;-&nbsp;iCubed srl
                  </Col>
              </Row>
          </Container>
      </footer>
    )
  }
}