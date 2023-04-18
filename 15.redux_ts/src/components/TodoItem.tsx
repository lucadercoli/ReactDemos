import React, { Component } from 'react'

interface TodoItemProps {
    item: string;
    idx: number;
    handleDelete: (idx: number) => void;
  }

export default class TodoItem extends Component<TodoItemProps, any>  {   
    render() {
        return (
            <div>
                <i className="fa fa-chevron-right"></i>
                <span className="todoText">{this.props.item}</span>
                <button className="deleteButton" onClick={() => this.props.handleDelete(this.props.idx)}>X</button>
            </div>
        )
    }
}
