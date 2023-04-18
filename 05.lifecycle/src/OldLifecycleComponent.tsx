import React, { Component } from 'react'

export default class OldLifecycleComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { company: 'iCubed' };
    }

    toggleCompany = () => {
        const newValue = this.state.company === 'iCubed' ? 'ZeusLab' : 'iCubed';
        this.setState((prevState: any) => {
            return {company: newValue };
        });
    }
    
    render() {
        return (
            <div>
                <h1>=== OLD LIFECYCLE ===</h1>
                <h3>Hello {this.props.name} from {this.state.company}.<br/>
                Please, check the Console in the Development Tools (F12)</h3>
                <button onClick={this.toggleCompany}>Switch Company</button>
            </div>
        )
    }
	
	/* SOLO REACT PRE 16.11.0 */
    UNSAFE_componentWillMount() {
        console.log("[UNSAFE_componentWillMount] l’istanza di un componente sta per essere agganciata o ridisegnata.");
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
        console.log(
            "[UNSAFE_componentWillReceiveProps] l'istanza di un component sta per" + 
            " ricevere un aggiornamento delle props => " +
            nextProps.name
        );
    }

    UNSAFE_componentWillUpdate() {
        console.log("[UNSAFE_componentWillUpdate] l'istanza di un component sta per essere aggiornata.");
    }

    componentDidMount() {
        console.log("[componentDidMount] l’istanza di un componente è stata agganciata o ridisegnata.");
    }

    componentWillUnmount() {
        console.log("[componentWillUnmount] l'istanza di un component sta per essere sganciata o rimossa.");
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(
            "[shouldComponentUpdate] l'istanza di un component sta per essere aggiornata." + 
            " Props: " + nextProps.name + 
            " State: " + nextState.company
        );

        return true;
    }

    componentDidUpdate() {
        console.log("[componentDidUpdate] l'istanza di un component è stata aggiornata.");
    }
}
