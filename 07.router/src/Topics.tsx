import React, { Component } from 'react'
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import Home from './Home';
import TopicsSubOne from './TopicsSubOne';
import TopicsSubTwo from './TopicsSubTwo';

export default class Topics extends Component<RouteComponentProps<{}>, any> {
  render() {
    const { match } = this.props

    return (
      <div>
        <h1>Topics</h1>
        <ul>
          <li><Link to={ match.url + "/subone" }>Subone</Link></li>
          <li><Link to={ match.url + "/details/1" }>Topic #1</Link></li>
          <li><Link to={ match.url + "/details/13" }>Topic #13</Link></li>
        </ul>

        <Route path={ match.url + "/subone" } component={TopicsSubOne} />
        <Route path={ match.url + "/details/:id" } component={TopicsSubTwo} />
      </div>
    )
  }
}
