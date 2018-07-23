import React, { Component } from 'react'
import DeleteFavoritesButton from './DeleteFavoritesButton';
import axios from 'axios';
const NumberFormat = require('react-number-format')

class Favorites2 extends Component {

  deleteFavoriteCoin = (id) => {
    axios.delete(`/api/coinFavorites/${id}`).then(results => {
      this.props.updateFavorites(results.data)
    })
  }
  
  render(){
    const {f} = this.props
    return(
      <div>
        <h3>Name: {f.name}</h3>
        <p> Rank: {f.rank}</p>
        <p> Price: <NumberFormat value = {f.price} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/></p>
        <p> Symbol: {f.symbol}</p>
        <DeleteFavoritesButton id={f.id} deleteFavoriteCoin = {this.deleteFavoriteCoin} />
      </div>  
    )
  }
}

export default Favorites2