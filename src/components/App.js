import React from 'react';
import '../assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: [],
    };
  }
  render() {
    return (
      <div className="App">
        <p>App works</p>
      </div>
    );
  }
}

export default App;
