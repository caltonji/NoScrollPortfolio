import * as React from 'react';
import HalfBlurredPhoto from './components/HalfBlurredPhoto/HalfBlurredPhoto';

import './App.css';
const imageUrl = 'images/hamburg.jpg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HalfBlurredPhoto url={ imageUrl }/>
      </div>
    );
  }
}

export default App;
