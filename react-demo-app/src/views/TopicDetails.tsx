import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface ITopicDetailsRouteProps {
    id: string;
}

export default class TopicDetails 
        extends Component<RouteComponentProps<ITopicDetailsRouteProps>> {
    render(): JSX.Element {
        const matchingUrl = this.props.match.url;
        const topicId = this.props.match.params.id;

        return(<React.Fragment>
            <h1>Topic #{topicId} Details</h1>
            <h2>Matching url: {matchingUrl}</h2>
        </React.Fragment>);
    }
}