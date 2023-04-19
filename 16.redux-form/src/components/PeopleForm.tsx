import React, { Component } from 'react'
import { InjectedFormProps, Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux';
import { actionTypes } from '../actions/Actions';
import { Dispatch } from 'redux';
import * as MyTypes from "MyTypes";
import { Row, Col } from 'reactstrap';

// form data interface (define the form fields)
interface IFormData {
    firstName: string;
    lastName: string;
}

interface IReduxActions {
    addPeople: (item: string) => object;
}

class PeopleForm extends Component<InjectedFormProps<IFormData, IReduxActions> & IReduxActions, {}> {
    handleSubmit(values : any) {
        this.props.addPeople(values.firstName + " " + values.lastName);
        this.props.reset();
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <Row>
                    <Col><label>First Name</label></Col>
                    <Col>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><label>Last Name</label></Col>
                    <Col>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
                    </Col>
                    <Col>
                    <button className="btn btn-secondary" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </Col>
                    
                </Row>
            </form>
        )
    }
}

/* export default reduxForm<IFormData, ICustomProps>({ // form data interface, custom props interface */
var reduxFormComponent = reduxForm<IFormData, IReduxActions>({ // form data interface, custom props interface
    form: 'simple' // a unique identifier for this form
})(PeopleForm)

/* wrap reduxform component into redux (to use the addToDo action) */

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    addPeople: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
    deletePeople: (idx: number) => dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(
    null,
    MapDispatchToProps
  )(reduxFormComponent);