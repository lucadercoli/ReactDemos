import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import UncontrolledForm from './UncontrolledForm';
import ValidateForm from './ValidateForm';
import SimpleValidationForm from './SimpleValidationForm';
import WebApiForm from './WebApiForm'
import RHForm from './ReactHookForms/RHForm';
import FormikForm from './Formix/FormikForm';
import FormixFormTwo from './Formix/FormikFormTwo';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Form></Form> */}
        {/* <UncontrolledForm></UncontrolledForm> */}
        {/* <ValidateForm></ValidateForm> */}
        {/* <SimpleValidationForm></SimpleValidationForm> */}
        {/* <WebApiForm></WebApiForm> */}
        {/* <RHForm></RHForm> */}
        {/* <FormikForm></FormikForm> */}
        <FormixFormTwo></FormixFormTwo>
      </div>
    );
  }
}

export default App;
