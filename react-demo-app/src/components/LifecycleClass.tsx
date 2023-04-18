import React, { Component } from 'react';

export default class LifecycleClass extends Component<{}, { label: string }> {
    state = { label: "this is a label in the state" };

    handleClick = () => {
        this.setState({ label: "Post click change" });
    }

    render(): JSX.Element {
        return(<React.Fragment>
            <h1>Lifecycle Component (Class)</h1>
            <button onClick={ this.handleClick }>Change State</button>
        </React.Fragment>
        );
    }

    componentDidMount() {
        // chiamate alle API (chiamate iniziali)

        console.log("[Lifecycle CLass] Component did mount.");
    }

    componentWillUnmount() {
        console.log("[Lifecycle CLass] Component will unmount.");
    }

    shouldComponentUpdate(newProps: any, newState: any, ctx: any) {
        console.log("[Lifecycle CLass] should update?");
        console.log(newProps);
        console.log(this.props);
        console.log(this.state);
        console.log(newState);
        return true;    // c'è re-render

        // return false;    // non c'è re-render
    }

    static getDerivedStateFromProps(newProps: any, newState: any) {
        console.log("[Lifecycle CLass] get derived state");
        console.log(newState);
        return { label: "this is a NEW label" };
    }
}