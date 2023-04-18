import React, { Component } from "react";

export default class ItemsList extends Component<any, any> {
  render() {
    const items = this.props.items;

    // const listItems = items.map((item: string) => <li>{item}</li>);
    const listItemsNoWarning = items.map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ));

    // debugger;
    return <ul>{listItemsNoWarning}</ul>;
  }
}
