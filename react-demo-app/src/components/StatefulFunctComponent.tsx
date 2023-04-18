import React, { useState } from 'react';
import User from '../models/User';

interface IStatefulFunctComponentProps {
    userData: User;
}

const StatefulFunctComponent: React.FC<IStatefulFunctComponentProps> = (props) => {
    const [ user, setUser ] = useState(props.userData);
    const [ displayDetails, setDisplayDetails ] = useState(false);

    if(user == undefined || user == null)
        return null;

    const handleToggle = () => {
        setDisplayDetails(!displayDetails);
    };

    const details = displayDetails && (
        <div>
            <h3>ID: {user.id}</h3>
            <h3>UserName: {user.userName}</h3>
        </div>
    );

    return(<div>
        <h1 onClick={ handleToggle }>User {user.employeeCode}</h1>
        { details }
    </div>);
};

export default StatefulFunctComponent;