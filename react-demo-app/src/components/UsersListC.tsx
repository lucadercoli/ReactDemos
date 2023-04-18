import React, { Component } from 'react';
import User from '../models/User';

interface IUsersListCProps {
    users: User[];
    children: JSX.Element | JSX.Element[];
}

export default class UsersListC extends Component<IUsersListCProps> {
    render(): JSX.Element {
        const userItems: JSX.Element[] =
        this.props.users.map(
            (item: User) => <li key={item.id}>[{item.employeeCode}] {item.userName}</li>
        );

        return(<React.Fragment>
            {this.props.children}
            <ul>{ userItems }</ul>
        </React.Fragment>);
    }
}