import React from 'react';
import Home from './Home';
import inventory from '../assets/javascript/inventory.js'
import '../assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: [],
      greenTeaList: [],
      blackTeaList: [],
      oolongTeaList: [],
      herbalTeaList: []
    };
    this.setVisible = this.setVisible.bind(this)
    this.setHidden = this.setHidden.bind(this)
    this.addStock = this.addStock.bind(this)
    this.subtractStock = this.subtractStock.bind(this)
  }

  UNSAFE_componentWillMount() {
    this.sortAndImportInventory()
  }

  sortAndImportInventory() {
    inventory.map((item) =>
      this.state.masterInventoryList.push(item)
    )
    this.state.masterInventoryList.map((item, index) => {
      if(item.type === "Green Tea") {
        item.id = index
        this.state.greenTeaList.push(item)
      }
      if(item.type === "Black Tea") {
        item.id = index
        this.state.blackTeaList.push(item)
      }
      if(item.type === "Oolong") {
        item.id = index
        this.state.oolongTeaList.push(item)
      }
      if(item.type === "Herbal") {
        item.id = index
        this.state.herbalTeaList.push(item)
      }
    })
  }

  setVisible(index) {
    let nowVisible = this.state.masterInventoryList;
    nowVisible[index].visible = true
    this.setState({ masterInventoryList: nowVisible })
  }

  setHidden(index) {
    let nowVisible = this.state.masterInventoryList;
    nowVisible[index].visible = false
    this.setState({ masterInventoryList: nowVisible })
  }

  addStock(index) {
    let newInventory = this.state.masterInventoryList;
    newInventory[index].stock++
    this.setState({ masterInventoryList: newInventory })
  }

  subtractStock(index) {
    if(this.state.masterInventoryList[index].stock !== 0) {
      let newInventory = this.state.masterInventoryList;
      newInventory[index].stock--
      this.setState({ masterInventoryList: newInventory })
    }
  }

  render() {
    return (
      <div className="App">
        <Home 
          inventory = {this.state.masterInventoryList}
          greenTea = {this.state.greenTeaList}
          blackTea = {this.state.blackTeaList}
          oolongTea = {this.state.oolongTeaList}
          herbalTea = {this.state.herbalTeaList}
          setVisible = {this.setVisible}
          setHidden = {this.setHidden}
          addStock = {this.addStock}
          subtractStock = {this.subtractStock}
        />
      </div>
    );
  }
}

export default App;
