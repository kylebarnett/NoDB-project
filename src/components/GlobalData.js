import React, { Component } from 'react'
import axios from 'axios'
const NumberFormat = require('react-number-format')

class GlobalData extends Component {
  constructor(){
    super()
    
    this.state = {
      global: {
        data: {
          active_cryptocurrencies: '',
          active_markets: '',
          bitcoin_percentage_of_market_cap: '',
          quotes: {
            USD: {
              total_market_cap: '',
              total_volume_24h: ''
            }
          }
        }
      }
    }
  }
  componentDidMount(){
    axios.get('/api/globalData').then( results => {
      this.setState({
        global: results.data
      })
    })
  }

  render(){
    console.log(this.state.global.data)
    return(
      <div>
        <h4> Global Data: </h4>
          <p> Cryptocurrencies: <NumberFormat value = {this.state.global.data.active_cryptocurrencies} displayType = {'text'} thousandSeparator = {true}/>
          </p>
          <p> Markets: <NumberFormat value = {this.state.global.data.active_markets} displayType = {'text'} thousandSeparator = {true}/>
          </p>
          <p> Market Cap: <NumberFormat value = {this.state.global.data.quotes.USD.total_market_cap} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/>
          </p>
          <p> 24hr Volume: <NumberFormat value = {this.state.global.data.quotes.USD.total_volume_24h} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/>
          </p>
          <p> BTC Dominance: <NumberFormat value = {this.state.global.data.bitcoin_percentage_of_market_cap} displayType = {'text'} thousandSeparator = {true} suffix = {'%'}/> 
          </p>
      </div>
    )
  }
}

export default GlobalData