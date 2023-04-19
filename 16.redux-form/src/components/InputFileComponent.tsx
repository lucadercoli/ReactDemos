import React, { Component } from 'react';

interface IInputFileProps {
    input: any;
}

export default class InputFileComponent extends Component<IInputFileProps, {}> {
    render() {
      const { input } = this.props
      const onInputChange = (e: any) => {
          e.preventDefault();
          const files = [...e.target.files];
          input.onChange(files);
      };
      return (
        <div>
          <input type="file" onChange={onInputChange} />
        </div>
      )
    }
  }