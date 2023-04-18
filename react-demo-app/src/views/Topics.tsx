import React, { Component } from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import TopicDetails from './TopicDetails';

export default class UserDetails 
        extends Component<RouteComponentProps<{}>> {
    render(): JSX.Element {
        const { match } = this.props;

        return(<React.Fragment>
            <h1>Topics</h1>
            <ul>
                <li><Link to={ match.url + "/details/1" }>Topic #1</Link></li>
                <li><Link to={ match.url + "/details/2" }>Topic #2</Link></li>
                <li><Link to={ match.url + "/details/3" }>Topic #3</Link></li>
            </ul>

            <Route path={  match.url + "/details/:id" } component={ TopicDetails } />
        </React.Fragment>);
    }
}

// /topics/details/1