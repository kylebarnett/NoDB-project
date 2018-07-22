import React, { Component } from 'react'
import axios from 'axios'

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

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleRankChange = (event) => {
    this.setState({
      rank: event.target.value
    })
  }
  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    })
  }
  handleSymbolChange = (event) => {
    this.setState({
      symbol: event.target.value
    })
  }

  addCoin = () => {
    const { name, rank, price, symbol } = this.state
    const newCoin = { name, rank, price, symbol }
    axios.post('/api/coins', newCoin).then( results => {
      this.props.updateCoin(results.data)
    })
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Coin Name" value={this.state.name} onChange={this.handleNameChange}></input>
        <input type="text" placeholder="Rank" value={this.state.rank} onChange={this.handleRankChange}></input>
        <input type="text" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange}></input>
        <input type="text" placeholder="Symbol" value={this.state.symbol} onChange={this.handleSymbolChange}></input>
        <button onClick={this.addCoin}> Add Coin! </button>
        </div>
    )
  }
}

export default AddCoin