import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router';

export default class TopicsSubTwo extends Component<RouteComponentProps<{ id: string }>, any> {
  render() {
    const { match } = this.props
    return (
      <div>
        <h1>Topic #{match.params.id}</h1>
        <h2>Welcome {match.url}</h2>
      </div>
    )
  }
}
