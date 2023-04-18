import React, { useState, useEffect } from 'react'
import AppStyles from '../Styles'
import { withStyles, WithStyles } from '@material-ui/styles'

interface IFunctionComponentProps extends WithStyles<typeof AppStyles> {
    children: React.ReactNode
}

const FunctionComponent : React.FC<IFunctionComponentProps> = (props: IFunctionComponentProps) => {
    const { classes } = props;
    const [ message, setMessage ] = useState("Test Message");   // add state to function components
    const [ secondMessage, setSecondMessage ] = useState("Second Test Message");

    useEffect(() => {
        console.log("FunctionComponent mounted [useEffect]")    // was componentDidMount
        return () => {
            console.log("FunctionComponent unmounted [useEffect]")  // was componentWillUnmount
        };
    }, [])

    useEffect(() => {
        // shows new value ...
        console.log(`FunctionComponent Second Message changed (New) ${secondMessage} [useEffect]`);
        return () => {
            // ... shows old value ...
            console.log(`FunctionComponent Second Message changed (Was) ${secondMessage} [useEffect]`);
        };
    }, [secondMessage]) // ... with a value in the array

    return (
        <div className={classes.redBox}>
            <div className={classes.whiteText}>
                {props.children}
                <span className={classes.redText}>
                    {message}
                </span>
                <span className={classes.redText}>
                    {secondMessage}
                </span>
            </div>
            <div className={classes.box}>
                <button onClick={() => setMessage("New Message")}>Switch State</button>
            </div>
            <div className={classes.box}>
                <button onClick={() => setSecondMessage("New Second Message")}>Switch Second State</button>
            </div>
        </div>
    )
}

export default withStyles(AppStyles)(FunctionComponent);