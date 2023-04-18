import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as MyTypes from "MyTypes";
import { Dispatch } from 'redux';
import { actionTypes } from "../actions/actions";
import { Ticket } from '../models/Ticket';
import { TicketingDataService } from '../services/TicketingDataService';

class TicketList extends Component<TicketListProps, any> {
    componentDidMount(){
        const dataService = new TicketingDataService();

        dataService
            .getTickets()
            .then(
                (data: Ticket[]) => { this.props.getTicketList(data); },
                (err: any) => { this.props.getTicketList([]); }
            );
    }

    render() {
        const { ticketList } = this.props;
        const style = { listStyleType: "none"};
        const titleStyle = { backgroundColor: "cadetblue", color: "white", padding: "3px", borderRadius: "5px" };
        const listItemStyle = {margin: "0 0 15px 0"};

        const rows = ticketList.map( (item:Ticket) => (
            <li key={item.id} style={listItemStyle}>
                <span style={titleStyle}>{item.title}</span>-{item.description}
            </li> 
        ));

        return (
            <div>
                <h1>Tickets</h1>
                <ul style={style}>
                    {rows}
                </ul>
            </div>
        )
    }
}

interface TicketListProps {
    ticketList: Ticket[];
    getTicketList: (data: Ticket[]) => object;
  }

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        ticketList: store.tickets
    };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    getTicketList: (data: Ticket[]) => dispatch({ type: actionTypes.TICKETSLIST, payload: data})
});

export default connect(
    MapStateToProps,
    MapDispatchToProps)(TicketList);