import React, { Component } from "react";

export default class RowsComponent extends Component<any, any> {
  render() {
    const items = this.props.items;

    // const listItems = items.map((item: string) => <li>{item}</li>);
    const listItemsNoWarning = items.map((item: any, index: number) => (
      <tr key={index}>
        <td>{item.term}</td>
        <td>{item.description}</td>
      </tr>
    ));

    // debugger;
    return <React.Fragment>{listItemsNoWarning}</React.Fragment>;
  }
}
