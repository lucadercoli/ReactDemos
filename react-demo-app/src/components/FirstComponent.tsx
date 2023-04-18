import React, { Component } from 'react';

interface IFirstClassComponentProps {
    message: string;
    onMessageAck: () => void;
}

export default class FirstClassComponent extends Component<IFirstClassComponentProps> {
    render(): JSX.Element {
        const msg = this.props.message;
        
        return(<h1>
            {msg} from FirstClassComponent&nbsp;
            <button onClick={this.props.onMessageAck}>Ok</button>
        </h1>);
    }
}