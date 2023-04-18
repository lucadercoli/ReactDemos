import React, { Component } from "react";
import Helmet from "react-helmet";

export default class NoMatch extends Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>ERROR 404!</title>
                </Helmet>
                <h1>Ooops, something went wrong ...</h1>
            </div>
        );
    }
}