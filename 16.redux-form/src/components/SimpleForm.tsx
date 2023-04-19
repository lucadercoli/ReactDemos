import React, { Component } from 'react'
import { InjectedFormProps, Field, reduxForm } from 'redux-form'

// form data interface (define the form fields)
interface IFormData {
    firstName: string;
    lastName: string;
}

// any additional custom props (messages, ...)
/* interface ICustomProps {
    message: string;
} */

/* class SimpleForm extends Component<InjectedFormProps<IFormData, ICustomProps> & ICustomProps, {}> { */
class SimpleForm extends Component<InjectedFormProps<IFormData>, {}> {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props /* , message } = this.props */

        return (
            <form onSubmit={handleSubmit}>
                {/* <h1>{message}</h1> */}
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

/* export default reduxForm<IFormData, ICustomProps>({ // form data interface, custom props interface */
export default reduxForm<IFormData>({ // form data interface, custom props interface
    form: 'simple' // a unique identifier for this form
})(SimpleForm)