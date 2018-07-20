import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddCoin from './components/AddCoin'
import GlobalData from './components/GlobalData'

class App extends Component {
  constructor(){
    super()

    this.state = {
      coins: []
    }
  }

  componentDidMount(){
    axios.get('api/coins').then(results => {
      this.setState({
        coins: results.data
      })
    })
  }

  updateCoin = (coin) => {
    this.setState({
      coins: coin
    })
  }

  render() {
    //map function here to map over the list of coins
    return (
      <div className="App">
          <GlobalData />
          <AddCoin />
      </div>
    );
  }
}

export default App;
