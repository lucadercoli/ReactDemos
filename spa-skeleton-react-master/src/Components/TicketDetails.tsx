import React, { Component } from "react";
import TicketDataService from "../Services/TicketDataService";
import { Table } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Ticket from "../Models/Ticket";
import { Navigate } from "react-router-dom";
import { withRouter, WithRouterProps } from "./withRouter";
import Form from "react-bootstrap/esm/Form";

interface Params {
  id: string;
}

type Props = WithRouterProps<Params>;

class TicketDetails extends Component<Props, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      item: [],
      show: true,
    };
  }

  componentDidMount() {
    const service = new TicketDataService();
    console.log(this.props);
    debugger;
    service.getTicket(this.props.match.params.id).then((data: any) => {
      this.setState({
        loading: false,
        item: data,
      });
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    // const { classes, handleClose } = this.props;
    const { error, loading, item, show } = this.state;

    if (!show) return <Navigate to="/tickets" replace={true} />;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        // id: number;
        // issueDate: Date;
        // category: string;
        // title: string;
        // description: string;
        // priority: string;
        // state: string;
        <>
          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{item.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.title}
                    readOnly={true}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={item.description}
                    readOnly={true}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.issueDate}
                    readOnly={true}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.category}
                    readOnly={true}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.priority}
                    readOnly={true}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.state}
                    readOnly={true}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
}

export default withRouter(TicketDetails);
