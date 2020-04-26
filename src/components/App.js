import React from 'react';
import Home from './Home';
import inventory from '../assets/javascript/inventory.js'
import '../assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: []
    };
  }

  componentWillMount() {
    this.importInventory()
    console.log("Master Ticket List: " + this.state.masterInventoryList)
  }

  importInventory() {
    inventory.map((item) =>
      this.state.masterInventoryList.push(item)
      )
  }

  render() {
    return (
      <div className="App">
        <p>App works</p>
        <Home 
        inventory = {this.state.masterInventoryList}/>
      </div>
    );
  }
}

export default App;
