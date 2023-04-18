import React, { Component } from 'react'
import { withStyles, WithStyles } from '@material-ui/styles';
import AppStyles from '../Styles';

interface IClassComponentProps extends WithStyles<typeof AppStyles> {
    
}

class ClassComponentState {
    constructor(public message: string, public secondMessage: string){}
}

class ClassComponent 
        extends Component<IClassComponentProps, ClassComponentState> {

    constructor(props: IClassComponentProps) {
        super(props);

        this.state = new ClassComponentState("Test Message", "Second Message");
    }

    handleClick = () => {
        this.setState({ message: 'New Message' })
    }

    handleSecondClick = () => {
        this.setState({ secondMessage: 'New Second Message' })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.navyBox}>
                <div className={classes.whiteText}>
                    {this.props.children}
                    <span className={classes.redText}>
                        {this.state.message}
                    </span>
                    <span className={classes.redText}>
                        {this.state.secondMessage}
                    </span>
                </div>
                <div className={classes.box}>
                    <button onClick={this.handleClick}>Switch State</button>
                </div>
                <div className={classes.box}>
                    <button onClick={this.handleSecondClick}>Switch Second State</button>
                </div>
            </div>
        )
    }

    // LIFCYCLE METHODS

    componentDidMount() {
        console.log("ClassComponent mounted [componentDidMount]")
    }

    componentWillUnmount() {
        console.log("ClassComponent unmounted [componentWillUnmount]")
    }

    UNSAFE_componentWillUpdate(props: any, state: any) {
        console.log(`ClassComponent changed (Old) ${this.state.secondMessage} => (New) ${state.secondMessage} [UNSAFE_componentWillUpdate]`)
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(
            ` ClassComponent is going to be changed.` + 
            ` (Old) ${this.state.secondMessage} => (New) ${nextState.secondMessage} [shouldComponentUpdate]`
        );

        return true;
    }
}

export default withStyles(AppStyles)(ClassComponent)