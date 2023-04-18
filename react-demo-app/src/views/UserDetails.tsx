import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IUserDetailsRouteProps {
    id: string;
    pluto: string;
}

export default class UserDetails 
        extends Component<RouteComponentProps<IUserDetailsRouteProps>> {
    render(): JSX.Element {
        const matchingUrl = this.props.match.url;
        const userId = this.props.match.params.id;
        const empCode = this.props.match.params.pluto;

        return(<React.Fragment>
            <h1>User #{userId} Details</h1>
            <h2>Matching url: {matchingUrl}</h2>
            <h2>EmpCode: {empCode}</h2>
        </React.Fragment>);
    }
}