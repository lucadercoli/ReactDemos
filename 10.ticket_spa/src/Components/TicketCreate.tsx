import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import TicketDataService from '../Services/TicketDataService';
import Ticket from '../Models/TicketModel';

interface TicketCreateState {
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
}

export default class TicketCreate extends Component<any, TicketCreateState> {
  constructor(props: any) {
    super(props);

    this.state = { title: '', description: '', category: '', priority: '', completed: false };
    
  }

  createTicket = (event: any) => {
    event.preventDefault();

    const service = new TicketDataService();

    const ticketToCreate = new Ticket(
      0,
      new Date(),
      Number(this.state.category),
      this.state.title,
      this.state.description,
      Number(this.state.priority),
      1,     // New (State)
      ''
    );

    service
        .createNewTicket(ticketToCreate)
        .then((data: any) => {
          this.setState({ completed: true });
        },
        (error: any) => {
          this.setState({ completed: true });
        });
  }

  handleChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // @ts-ignore : to avoid typescript to complain 
    this.setState({
      [name]: value
    });
  }

  render() {
    const { completed } = this.state;

    if(completed) {
      return <Redirect to="/ticketlist"/>
    }

    return (
      <form onSubmit={this.createTicket}>
        <Container>
          <Row>
              <Col>
                <h1>Open New Ticket</h1>
              </Col>
          </Row>
          <Row>
              <Col>
                &nbsp;
              </Col>
          </Row>
          <Row className="form-group">
            <Col className="col-3">
              <label htmlFor="title">Title</label>   
            </Col>
            <Col className="col-9">
            <input className="form-control" type="text" name="title" 
                        value={this.state.title} onChange={this.handleChange}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="col-3">
              <label htmlFor="description">Description</label>   
            </Col>
            <Col className="col-9">
            <textarea className="form-control" name="description" 
                        value={this.state.description} onChange={this.handleChange}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="col-3">
              <label htmlFor="category">Category</label>   
            </Col>
            <Col className="col-4">
              <select className="form-control" name="category" 
                  value={this.state.category} onChange={this.handleChange}>
                  <option value="0">-- Select a Category --</option>
                  <option value="1">Unknown</option>
                  <option value="2">Development</option>
                  <option value="3">System</option>
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="col-3">
              <label htmlFor="priority">Priority</label>   
            </Col>
            <Col className="col-4">
              <select className="form-control" name="priority" 
                  value={this.state.priority} onChange={this.handleChange}>
                  <option value="0">-- Select a Priority --</option>
                  <option value="1">Low</option>
                  <option value="2">Normal</option>
                  <option value="3">High</option>
              </select>
            </Col>
          </Row>
          <Row className="form-group">
              <Col className="col-6">
                <button type="submit" className="btn btn-lg btn-primary">Create</button>
              </Col>
              <Col className="col-6 text-right">
                <Link to='/ticketlist' className="btn btn-lg btn-outline-secondary">Cancel</Link>
              </Col>
          </Row>
        </Container>
      </form>
      
    )
  }
}
