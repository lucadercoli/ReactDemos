import React, { CSSProperties, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './models/User';
import FormComponent from './components/FormComponent';

function App() {
  const functMsg: string = "Ciao";

  const handleReturnMessage = () => console.log("Eccomi qui!");

  const handleReturnMessageWithData = (data: string) => console.log("Eccoci qui: " + data);

  const user = new User(1, "mrossi", "EMP001");

  const users: User[] = [
    new User(1, "mrossi", "EMP001"),
    new User(2, "pbianchi", "EMP002"),
    new User(3, "lverdi", "EMP003"),
    new User(4, "mbrambilla", "EMP004")
  ];

  const crimsonDiv: CSSProperties = { 
    backgroundColor: user.id == 1 ? 'crimson' : 'darkgreen'
  };

  const [ toggleState, setToggleState ] = useState(true);

  return (
    <FormComponent />
  );
}

export default App;
