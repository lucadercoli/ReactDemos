import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class FormComponentState {
    constructor(
        public firstName: string,
        public lastName: string,
        public isAdmin: boolean,
        public role: string,
        public notes: string
    ) { }
}

export default class FormComponent extends Component<{}, FormComponentState> {
    private fileInputRef: React.RefObject<HTMLInputElement>;
    private validator: SimpleReactValidator;

    constructor(props: {}) {
        super(props);

        this.fileInputRef = React.createRef();

        this.validator = new SimpleReactValidator({
            className: 'validationError'
        });

        this.state = new FormComponentState('', '', false, '', '');
    }

    handleChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name;
        const value = evt.target.type == 'checkbox' ?
            evt.target.checked : 
            evt.target.value;

        // @ts-ignore : Computed Property Name (ES6) not supported in TS
        this.setState({ [ name ]: value });
    }

    handleOtherFieldsChanges = (evt: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = evt.target.name;
        const value = evt.target.value;

        // @ts-ignore : Computed Property Name (ES6) not supported in TS
        this.setState({ [ name ]: value });
    }

    handleSubmit = (evt: React.FormEvent<HTMLFormElement>) =>  {
        evt.preventDefault();

        if(this.validator.allValid()) {
            const files = this.fileInputRef.current?.files;
            const attachment = files != null || files != undefined ? files[0]?.name : "";

            // salvo i dati ...
            alert( JSON.stringify(this.state) + ' / File: ' + attachment );
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render(): JSX.Element {
        return (
            <div className="container">
              <div className='row'>
                <div className='col-12 text-center'>
                  <h1>Form</h1>
                </div>
              </div>
              <form onSubmit={ this.handleSubmit }>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='firstName'>First Name</label>
                </div>
                <div className='col-6'>
                  <input className='form-control' name="firstName" type="text" 
                    value={this.state.firstName} onChange={ this.handleChanges } />
                </div>
                <div className='col-3'>
                  { this.validator.message('firstName', this.state.firstName, 'required|max:10') }
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='lastName'>Last Name</label>
                </div>
                <div className='col-6'>
                  <input className='form-control' name="lastName" type="text" 
                    value={this.state.lastName} onChange={ this.handleChanges } />
                </div>
                <div className='col-3'>
                  { this.validator.message('lastName', this.state.lastName, 'required|alpha') }
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='isAdmin'>Is Admin</label>
                </div>
                <div className='col-6'>
                  <input className='form-check-input' name="isAdmin" type="checkbox" 
                    checked={this.state.isAdmin} onChange={ this.handleChanges } />
                </div>
                <div className='col-3'>
                  <h1>&nbsp;</h1>
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='role'>Role</label>
                </div>
                <div className='col-6'>
                  <select className='form-control' value={this.state.role}
                    name="role" onChange={this.handleOtherFieldsChanges}>
                      <option value=''>-- Select a Role --</option>
                      <option value='MGR'>Manager</option>
                      <option value='SPV'>Supervisor</option>
                      <option value='PEO'>Peones</option>
                  </select>
                </div>
                <div className='col-3'>
                  <h1>&nbsp;</h1>
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='notes'>Notes</label>
                </div>
                <div className='col-6'>
                  <textarea name="notes" value={this.state.notes}
                    onChange={this.handleOtherFieldsChanges}></textarea>
                </div>
                <div className='col-3'>
                  <h1>&nbsp;</h1>
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-3'>
                  <label htmlFor='notes'>Attachment</label>
                </div>
                <div className='col-6'>
                  <input type='file' name="attachment" ref={this.fileInputRef} />
                </div>
                <div className='col-3'>
                  <h1>&nbsp;</h1>
                </div>
              </div>
              <div className='row  form-group'>
                <div className='col-3'>
                &nbsp;
                </div>
                <div className='col-6'>
                &nbsp;
                </div>
                <div className='col-3'>
                  <input type="submit" className='btn btn-primary' value="Submit" />
                </div>
              </div>
              </form>
            </div>
        );
    }
}