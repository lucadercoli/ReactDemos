import React from 'react';
import User from '../models/User';

interface IUsersListProps {
    users: User[];
    children: JSX.Element | JSX.Element[] | string;  // TS Type merge
}

const UsersList: React.FC<IUsersListProps> = (props) => {
    const userItems: JSX.Element[] =
        props.users.map(
            (item: User) => <UserDetails key={item.id} item={item} />
        );

    return(<div>
        {props.children}
        <ul>{ userItems }</ul>
    </div>);
}

export default UsersList;

const UserDetails: React.FC<{ item: User }> = (props) => 
    <li>[{props.item.employeeCode}] {props.item.userName}</li>