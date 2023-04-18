import React, { Component } from 'react'
import { RouteComponentProps, Link, Redirect } from 'react-router-dom';
import Ticket from '../Models/TicketViewModel';
import TicketDataService from '../Services/TicketDataService';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';

interface TicketDeleteState {
    ticketToBeDeleted: Ticket;
    completed: boolean;
}

export default class TicketDelete extends Component<RouteComponentProps<{ id: string }>, TicketDeleteState> {
    constructor(props: RouteComponentProps<{ id: string }>) {
        super(props);

        this.state = {
            ticketToBeDeleted: {} as Ticket,
            completed: false
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const service = new TicketDataService();

        service
            .getTicketById(match.params.id)
            .then((data: any) => {
                this.setState({ ticketToBeDeleted: data });
            },
            (error: any) => {
                
            });
    }

    deleteTicket = () => {
        const { match } = this.props;
        const service = new TicketDataService();

        service
            .deleteTicketById(match.params.id)
            .then((data: any) => {
                this.setState({ completed: true });
            },
            (error: any) => {
                this.setState({ completed: true });;
            });  
    }

  render() {
    const { match } = this.props;
    const { ticketToBeDeleted, completed } = this.state;

    if (completed) {
        return <Redirect to='/ticketlist'/>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="deleteHeader">Are you sure you want to delete this Ticket?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="ticketId">Ticket #{ ticketToBeDeleted.id }</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{ticketToBeDeleted.title}</h2>
                    <span><em>{ticketToBeDeleted.description}</em></span>
                </Col>
            </Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row>
                <Col>
                <button className="btn btn-lg btn-danger" onClick={this.deleteTicket}>Yes</button>
                </Col>
                <Col>
                <Link to="/ticketlist" className="btn btn-lg btn-outline-secondary">No</Link>
                </Col>
            </Row>
      </Container>
    )
  }
}
