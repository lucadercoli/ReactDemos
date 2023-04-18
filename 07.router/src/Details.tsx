import React, { Component } from "react";
import { Link, RouteComponentProps, Route } from "react-router-dom";
import queryString from 'query-string';

export default class Details extends Component<RouteComponentProps<{ id: string, pageSize: string }>, any> {
    render() {
        const { match } = this.props;
        const values = queryString.parse(this.props.location.search);

        return (
            <div>
                <h1>Details numero {match.params.id} [{match.params.pageSize}]</h1>
                <h2>Querystring:&nbsp;{this.props.location.search}</h2>
                <h3>{values.page}</h3>
                <h3>{values.pageSize}</h3>
            </div>
        );
    }
}