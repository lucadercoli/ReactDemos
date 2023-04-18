import React, { Component } from 'react'
import TicketView from '../Models/TicketViewModel';
import TicketDataService from '../Services/TicketDataService';
import { RouteComponentProps, Route } from 'react-router';
import { Link } from 'react-router-dom';

interface TicketListState {
    tickets: TicketView[];
    loading: boolean;
}

export default class TicketList extends Component<RouteComponentProps<{}>, TicketListState> {
    constructor(props:RouteComponentProps<{}>) {
        super(props);

        this.state = {
            tickets: [],
            loading: true
        }
    }

    componentDidMount() {
        const service = new TicketDataService();

        service
            .getTickets()
            .then((data: any) => {
                this.setState({ tickets: data, loading: false });
            },
            (error: any) => {
                this.setState({ tickets: [], loading: false });
            });
    }

    render() {
        const { match } = this.props;
        const { tickets, loading } = this.state;    // Object Destructuring

        let ticketData = tickets.map((item: TicketView) => (
            <tr key={item.id}>
                <td>{new Date(item.issueDate).toISOString().slice(0,10)}</td>
                <td>{item.priority}</td>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.state}</td>
                <td>
                    <Link className="btn btn-outline-info btn-sm" to={"/edit/" + item.id }>
                        <i className="fa fa-pencil-square-o"></i>&nbsp;Edit
                    </Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to={ "/delete/" + item.id }>
                        <i className="fa fa-trash"></i>&nbsp;Delete
                    </Link>
                </td>
            </tr>
        ));

        let contents = loading
            ? <tr><td colSpan={6} style={{"textAlign":"center"}}><span>Loading...</span></td></tr>
            : ticketData;

        return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link className="btn btn-outline-primary btn-small" to="/new/">
                    <i className="fa fa-file-o"></i>&nbsp;Open New Ticket
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>State</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contents}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
