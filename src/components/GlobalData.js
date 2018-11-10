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
      console.log(111111, results)
      this.setState({
        global: results.data
      })
    })
  }

  render(){
    console.log(111111, this.state.global.data)
    return(
      <div className = "big-header">
        <h4 className = "global-data"> Global Data </h4>
          <p className = "crypto-data"> Cryptocurrencies: <NumberFormat value = {this.state.global.data.active_cryptocurrencies} displayType = {'text'} thousandSeparator = {true}/>
          </p>
          <p className = "market-data"> Markets: <NumberFormat value = {this.state.global.data.active_markets} displayType = {'text'} thousandSeparator = {true}/>
          </p>
          <p className = "market-cap-data"> Market Cap: <NumberFormat value = {this.state.global.data.quotes.USD.total_market_cap} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/>
          </p>
          <p className = "volume-data"> 24hr Volume: <NumberFormat value = {this.state.global.data.quotes.USD.total_volume_24h} displayType = {'text'} thousandSeparator = {true} prefix = {'$'}/>
          </p>
          <p className = "btc-dominance-data"> BTC Dominance: <NumberFormat value = {this.state.global.data.bitcoin_percentage_of_market_cap} displayType = {'text'} thousandSeparator = {true} suffix = {'%'}/> 
          </p>
      </div>
    )
  }
}

export default GlobalData