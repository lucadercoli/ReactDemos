import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm';
import FullForm from './components/FullForm';
import { Provider } from 'react-redux';
import ValidatedForm from './components/ValidatedForm';
import { store } from './Store';
import { Container, Row, Col } from 'reactstrap';
import PeopleForm from './components/PeopleForm';
import PeopleList from './components/PeopleList';

const showResults = (values: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      // delayed for Test purposes
      const attachmentCount = values.attachment !== undefined && values.attachment.length;
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}\n\n(Attachments: ${attachmentCount})`);
      resolve();
    }, 500);
  });

const PeopleContainer: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>ReduxForm with Redux</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PeopleForm />
        </Col>
        <Col>
          <PeopleList />
        </Col>
      </Row>
    </Container>
  );
}

const FirstStepsContainer : React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<SimpleForm onSubmit={showResults} /> message="Hello Rob!" />
          <FullForm onSubmit={showResults} /> */}
          <ValidatedForm onSubmit={showResults}></ValidatedForm>
        </header>
      </div>
  );
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FirstStepsContainer></FirstStepsContainer>
      {/* <PeopleContainer></PeopleContainer> */}
    </Provider>
  );
};

export default App;
