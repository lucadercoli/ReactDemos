import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../models/User';
import UserDataService from '../services/UserDataService';

const UserList: React.FC = (props) => {
    const [ users, setUsers ] = useState<User[]>([]);

    // useEffect(() => {
    //     const svc = new UserDataService();
        
    //     svc.GetUsers().then(
    //         (usersList: User[]) => setUsers(usersList)
    //     );

    // }, []);

    const getData = async () => {
        const svc = new UserDataService();
    
        const usersList = await svc.GetUsers();
        setUsers(usersList);
    };

    useEffect(() => {
        getData();
    }, []);

    const dataRows = users.map(
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
};

export default UserList;