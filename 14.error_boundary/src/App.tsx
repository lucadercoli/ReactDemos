import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './models/Picture';
import PictureListComponent from './PictureListComponent';
import ErrorBoundary from './ErrorBoundary';

const ComponentWithError: React.FC = () => { throw new Error('Broken Component') }

const App: React.FC = () => {
  var images: Picture[] = [
    new Picture(
      1, 
      'https://www.informagiovani-italia.com/salisburgo_panorama2.jpg', 
      'Mirabel Palace'
    ),
    new Picture(
      2, 
      'https://www.informagiovani-italia.com/salisburgo_panorama2.jpg', 
      'Mozart Haus'
    ),
    new Picture(
      3, 
      'https://www.informagiovani-italia.com/salisburgo_panorama2.jpg', 
      'Von Trapp Mansion'
    ),
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PictureListComponent images={images}>
          <h1>Le mie Ferie a Magdeburgo 2019</h1>
          <ErrorBoundary>
            <ComponentWithError></ComponentWithError>
          </ErrorBoundary>
        </PictureListComponent>
      </header>
    </div>
  );
}

export default App;
