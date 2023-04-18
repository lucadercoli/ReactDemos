import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../models/User';
import UserDataService from '../services/UserDataService';

interface IUserListClassState { 
    users: User[] 
}

export default class UserListClass extends Component<{}, IUserListClassState> {

    state: IUserListClassState = { users: [] };

    // componentDidMount() {    // PROMISE & THEN
    //     const svc = new UserDataService();

    //     svc.GetUsers().then( 
    //         (users: User[]) => this.setState({ users })
    //     );
    // }

    async componentDidMount() { // async / await
        const svc = new UserDataService();
        
        const users = await svc.GetUsers();
        this.setState({ users });
    }
    
    render(): JSX.Element {
        const dataRows = this.state.users.map(
            (item: User) => (<tr key={item.id}>
                <td>{item.id}</td>
                <td><Link to={ "/userdetailsf/" + item.id + "/code/" + item.employeeCode }>{item.employeeCode}</Link></td>
                <td>{item.userName}</td>
            </tr>)
        );
           
        return(<div className="container">
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee Code</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            { dataRows }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
    }
}