import React, { Component } from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'
const NumberFormat = require('react-number-format')

 
class CoinList extends Component {

  addToFavorites = () => {
    axios.post('/api/coinFavorites', this.props.c).then( results => {
      return this.props.updateFavorites(results.data)
    })
  }

  deleteCoin = (id) => {
    axios.delete(`/api/coins/${id}`).then(results => {
      this.props.updateCoin(results.data)
    })
  }
  render(){
    const {c} = this.props
    return (
      <div className = "coins">
        <h1>New Project</h1>
        <h3>Name: {c.name}</h3>
        <p> Rank: {c.rank}</p>
        <p> Price: <NumberFormat value = {c.price} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/></p>
        <p> Symbol: {c.symbol}</p>
        <button className = "add-to-favorites-button" onClick={this.addToFavorites}> Add To Favorites! </button>
        <DeleteButton id={c.id} deleteCoin={this.deleteCoin} />
      </div>
    )
  }
}

export default CoinList;