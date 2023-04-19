import React, { Component } from 'react';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import InputFileComponent from './InputFileComponent';

// form data interface (define the form fields)
interface IFullFormData {
    firstName: string;
    lastName: string;
    password: string;
    birthDate: Date;
    comments: string;
    role: string;
    attachment?: any[];
    sex: string;
    employed: boolean;
}

class FullForm extends Component<InjectedFormProps<IFullFormData>, {}> {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={handleSubmit}>
                {/* <h1>{message}</h1> */}
                <div>
                    <label>First Name</label>
                    <div>
                        <Field name="firstName" component="input" type="text" placeholder="First Name" />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field name="password" type="password" component="input" label="Password" />
                    </div>
                </div>
                <div>
                    <label>Birth Date</label>
                    <div>
                        <Field name="birthDate" type="date" component="input" label="Birth Date" />
                    </div>
                </div>
                <div>
                    <label>Sex</label>
                    <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />{' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />{' '}
                        Female
                    </label>
                    </div>
                </div>
                <div>
                    <label>Comments</label>
                    <div>
                        <Field name="comments" type="text" component="textarea" label="Comments" />
                    </div>
                </div>
                <div>
                    <label>Role</label>
                    <div>
                        <Field name="role" component="select">
                            <option>--- SELECT A ROLE ---</option>
                            <option value="user">User</option>
                            <option value="admin">Administrator</option>
                            <option value="gurst">Guest</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                    </div>
                </div>
                <div>
                    <label>Attachment</label>
                    <div>
                        <Field name="attachment" type="file" component={InputFileComponent} label="Attachment" />
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

export default reduxForm<IFullFormData>({ // form data interface, custom props interface
    form: 'simple' // a unique identifier for this form
})(FullForm)