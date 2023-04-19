import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLength, minLength, minValue, email, alphaNumeric, number, phoneNumber } from '../ValidationRules';

//== LOCAL VALIDATORS =====
const maxLength15 = maxLength(15);
const minLength2 = minLength(2);
const minValue13 = minValue(13);
// == END LOCAL VALIDATORS =====

// form data interface (define the form fields)
interface IFullFormData {
  username: string;
  email: string;
  age: number;
  phone: number;
}

interface IElement {
  input: any;
  label: string;
  type: string;
  meta: { touched: boolean; error: string; warning: string; }
}
const renderField = (item: IElement) => (
  <div>
    <label>{item.label}</label>
    <div>
      <input {...item.input} placeholder={item.label} type={item.type} />
      <div className="errorMessage">
        {item.meta.touched && (item.meta.error && <span>{item.meta.error}</span>)}
      </div>
      <div className="warningMessage">
        {item.meta.touched && (item.meta.warning && <span>{item.meta.warning}</span>)}
      </div>
    </div>
  </div>
)

const FieldLevelValidationForm = (props: InjectedFormProps<IFullFormData>) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[required, number, minValue13]}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone number"
        validate={[required, phoneNumber]}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm<IFullFormData>({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
