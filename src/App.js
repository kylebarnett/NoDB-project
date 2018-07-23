import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddCoin from './components/AddCoin'
import GlobalData from './components/GlobalData'
import CoinList from './components/CoinList'
import Favorites from './components/Favorites'

class App extends Component {
  constructor(){
    super()

    this.state = {
      coins: [],
      favorites: []
    }
  }

  componentDidMount(){
    axios.get('/api/coins').then(results => {
      this.setState({
        coins: results.data
      })
    })
    axios.get('/api/coinFavorites').then(results => {
      this.setState({
        favorites: results.data
      })
    })
  }

  updateCoin = (coin) => {
    this.setState({
      coins: coin
    })
  }

  updateFavorites = (favorite) => {
    this.setState({
      favorites: favorite
    })
  }

  render() {
    let coinMap = this.state.coins.map( c => {
      return (
        <CoinList updateCoin={this.updateCoin} updateFavorites = {this.updateFavorites} c = {c}/>
      )
    }) 
    return (
      <div className="App">
          <GlobalData />
          <AddCoin updateCoin={this.updateCoin} />
          {coinMap}
          <Favorites updateFavorites={this.updateFavorites} favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
