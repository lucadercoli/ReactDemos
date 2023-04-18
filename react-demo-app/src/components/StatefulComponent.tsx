import React, { Component } from 'react';
import User from '../models/User';

interface IStatefulComponentProps {
    userData: User;
}

class StatefulComponentState {
    constructor(
        public user: User,
        public displayDetails: boolean = false
    ) {}
}

export default class StatefulComponent 
        extends Component<IStatefulComponentProps, StatefulComponentState> {

    constructor(props: IStatefulComponentProps) {
        super(props);   // costruttore della classe base

        // inizializzare lo stato
        this.state = new StatefulComponentState(props.userData);
    }

    handleToggle = () => {
        this.setState({ displayDetails: !this.state.displayDetails });
    };

    render(): JSX.Element {
        const { displayDetails, user } = this.state;    // object destructuring

        const currentClass = displayDetails ? "" : "hidden";

        return(<div>
            <h1 onClick={ this.handleToggle }>User {user.employeeCode}</h1>
            <div className={ currentClass }>
                <h3>ID: {user.id}</h3>
                <h3>UserName: {user.userName}</h3>
            </div>
        </div>);
    }
}