import React, { Component } from "react";
import TicketDataService from "../Services/TicketDataService";
import { Table } from "reactstrap";
import Ticket from "../Models/Ticket";

class List extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      items: [],
    };
  }

  componentDidMount() {
    const service = new TicketDataService();
    service.getTickets().then(
      (data: any) => {
        this.setState({
          loading: false,
          items: data,
        });
        if ((data as Ticket[]).length == 0) {
          service.addTicket({
            category: "Categoria",
            description: "descrizione",
            id: 1,
            issueDate: new Date(),
            priority: "High",
            state: "In Progress",
            title: "Titolo",
          });
        }
      },
      (error: any) => {
        this.setState({
          laoding: false,
          error,
        });
      }
    );

    // let ticketDataService = new TicketDataService();
    // ticketDataService.addTicket({
    //   category: "Categoria",
    //   description: "descrizione",
    //   id: 1,
    //   issueDate: new Date(),
    //   priority: "High",
    //   state: "In Progress",
    //   title: "Titolo",
    // });
  }

  render() {
    const { classes } = this.props;
    const { error, loading, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>issueDate</th>
              <th>category</th>
              <th>title</th>
              <th>description</th>
              <th>priority</th>
              <th>state</th>
            </tr>
          </thead>

          {items && (
            <tbody>
              {items?.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.issueDate}</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.priority}</td>
                  <td>{item.state}</td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      );
    }
  }
}

export default List;
