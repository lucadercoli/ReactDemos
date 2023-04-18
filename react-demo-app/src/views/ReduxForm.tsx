import React, { Component }  from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

interface IFormData {
    firstName: string;
    lastName: string;
}

class ReduxForm extends Component<InjectedFormProps<IFormData>> {
    myHandleSubmit = (values: IFormData) => {
        // chiamate alle API ...
        alert(values.firstName + ' ' + values.lastName);
        this.props.reset();
    };

    render(): JSX.Element {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return(<div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Redux Form</h1>
                    <form onSubmit={handleSubmit(this.myHandleSubmit)}>
                        <div className="row">
                            <div className="col-12">
                                <Field 
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Field 
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                            <div className="col-6">
                            <button className="btn btn-primary" type="button" onClick={reset}>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
    }
}

export default reduxForm<IFormData>({ 
    form: 'simple-form'
})(ReduxForm);