import React, { Component } from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'

class AddCoin extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      rank: '',
      price: 0,
      symbol: ''
    }
  }

  handleNameChange = (value) => {
    this.setState({
      name: value
    })
  }
  handleRankChange = (value) => {
    this.setState({
      rank: value
    })
  }
  handlePriceChange = (value) => {
    this.setState({
      price: value
    })
  }
  handleSymbolChange = (value) => {
    this.setState({
      symbol: value
    })
  }

  addCoin = () => {
    const { name, rank, price, symbol } = this.state
    const newCoin = { name, rank, price, symbol }
    axios.post('/api/coins', newCoin).then( results => {
      this.props.addCoin(results.data)
    })
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Coin Name" value={this.state.name} onChange={ (e) => this.handleNameChange(e.target.value)}></input>
        <input type="text" placeholder="Rank" value={this.state.rank} onChange={ (e) => this.handleRankChange(e.target.value)}></input>
        <input type="text" placeholder="Price" value={this.state.price} onChange={ (e) => this.handlePriceChange(e.target.value)}></input>
        <input type="text" placeholder="Symbol" value={this.state.symbol} onChange={ (e) => this.handleSymbolChange(e.target.value)}></input>
        <button> Add Coin! </button>
        </div>
    )
  }
}

export default AddCoin