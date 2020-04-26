import React from 'react';
import Home from './Home';
import '../assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: []
    };
  }



  render() {
    return (
      <div className="App">
        <p>App works</p>
        <Home />
      </div>
    );
  }
}

export default App;
