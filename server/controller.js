const axios = require('axios')

let coins = [
  {
    id: 1,
    name: "Bitcoin",
    rank: 1,
    price: 7500,
    symbol: "BTC"
  },
  {
    id: 2,
    name: "Ethereum",
    rank: 2,
    price: 460,
    symbol: "ETH"
  },
  {
    id: 3,
    name: "Ripple",
    rank: 3,
    price: 0.45,
    symbol: "XRP"
  },
  {
    id: 4,
    name: "Bitcoin Cash",
    rank: 4,
    price: 790,
    symbol: "BCH"
  },
  {
    id: 5,
    name: "EOS",
    rank: 5,
    price: 8,
    symbol: "EOS"
  },
]

let globalData = []

let id = 6

module.exports = {
  getCoins: (req, res) => {
    res.status(200).send(coins)
  },

  getGlobalData: (req, res) => {
    axios.get('https://api.coinmarketcap.com/v2/global/').then(results => {
      globalData = results.data
      res.status(200).send(globalData)
    })
  },

  addCoins: (req, res) => {
    const {name, rank, price, symbol} = req.body
    const coin = {
      id,
      name,
      rank,
      price,
      symbol
    }
    coins.push(coin)
    id++
    res.status(200).send(coins)
  },

  deleteCoin: (req, res) => {
    const {id} = req.params
  }
}