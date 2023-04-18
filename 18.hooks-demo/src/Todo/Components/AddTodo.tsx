import React, { Component } from 'react'

interface AddTodoProps {
    addTodo: (item: string) => void;
}

export default class AddTodo extends Component<AddTodoProps, { input: string }> {
    constructor(props: AddTodoProps) {
        super(props);
        this.state = { input: '' };
    }

    handleInput = (e: any) => {
        this.setState({ input: e.target.value })
    }

    handleAdd = () => {
        if (this.state.input) {
            this.props.addTodo(this.state.input)
            this.setState({ input:'' })
        }
    }

    render() {
        return(
            <form onSubmit={e => { e.preventDefault(); this.handleAdd() }}>
            <input
                type="text"
                placeholder="enter new task..."
                style={{ width: 350, height: 15 }}
                value={this.state.input}
                onChange={this.handleInput}
            />
            <input
                type="submit"
                style={{ float: 'right', marginTop: 2 }}
                disabled={!this.state.input}
                value="add"
            />
        </form>
        );
    }
}