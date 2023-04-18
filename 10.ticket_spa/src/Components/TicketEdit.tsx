import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import TicketDataService from '../Services/TicketDataService';
import Ticket from '../Models/TicketModel';

interface TicketEditState {
  id: string
  title: string;
  description: string;
  category: string;
  priority: number;
  state: number;
  completed: boolean;
}

export default class TicketEdit extends Component<RouteComponentProps<{ id: string }>, TicketEditState> {
  constructor(props: any) {
    super(props);

    this.state = { id: '', title: '', description: '', category: '', priority: 0, state: 0, completed: false };
  }

  componentDidMount() {
    const { match } = this.props;
    const service = new TicketDataService();

    service
      .getTicketById(match.params.id)
      .then((data: Ticket) => {
          this.setState({
            id: String(data.id),
            title: data.title,
            description: data.description,
            category: String(data.categoryId),
            priority: data.priorityId,
            state: data.stateId
           });
      },
      (error: any) => {
          
      });
  }

  updateTicket = (event: any) => {
    event.preventDefault();

    const service = new TicketDataService();

    const ticketToEdit = new Ticket(
      Number(this.state.id),
      new Date(),
      Number(this.state.category),
      this.state.title,
      this.state.description,
      Number(this.state.priority),
      Number(this.state.state),
      ''
    );

    service
        .updateTicket(ticketToEdit)
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
    const completed = this.state.completed;
    const { match } = this.props;

    if(completed) {
      return <Redirect to="/ticketlist"/>
    }
    
    return (
        <Container>
          <Row>
              <Col>
                <h1>Edit Ticket #{this.state.id}</h1>
              </Col>
            </Row>
          <Row>
            <Col className="col-12">
            <form onSubmit={this.updateTicket}>
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
                <Col className="col-3">
                  <label htmlFor="state">State</label>   
                </Col>
                <Col className="col-4">
                  <select className="form-control" name="state" 
                      value={this.state.state} onChange={this.handleChange}>
                      <option value="0">-- Select a State --</option>
                      <option value="1">New</option>
                      <option value="2">On Going</option>
                      <option value="3">Close</option>
                  </select>
                </Col>
              </Row>
              <Row className="form-group">
                  <Col className="col-6">
                    <button type="submit" className="btn btn-lg btn-primary">Update</button>
                  </Col>
                  <Col className="col-6 text-right">
                    <Link to='/ticketlist' className="btn btn-lg btn-outline-secondary">Cancel</Link>
                  </Col>
              </Row>
              </form>
            </Col>
            {/* <Col className="col-5">
              <TicketNotes ticketId={match.params.id} />
            </Col> */}
          </Row>
        </Container>
      
    )
  }
}
