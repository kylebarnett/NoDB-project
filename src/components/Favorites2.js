import React, { Component } from 'react'
const NumberFormat = require('react-number-format')

class Favorites2 extends Component {
  render(){
    const {f} = this.props
    return(
      <div>
        <h3>Name: {f.name}</h3>
        <p> Rank: {f.rank}</p>
        <p> Price: <NumberFormat value = {f.price} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/></p>
        <p> Symbol: {f.symbol}</p>
      </div>  
    )
  }
}

export default Favorites2