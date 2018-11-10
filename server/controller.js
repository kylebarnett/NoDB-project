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
let coinFavorites = []
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

  getCoinFavorites: (req, res) => {
    res.status(200).send(coinFavorites)
  },

  addCoins: (req, res) => {
    const { name, rank, price, symbol } = req.body
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

  addCoinFavorites: (req, res) => {
    const { id, name, rank, price, symbol } = req.body
    const newFavorite = {
      id,
      name,
      rank,
      price,
      symbol
    }
    coinFavorites.push(newFavorite)
    res.status(200).send(coinFavorites)
  },

  deleteCoin: (req, res) => {
    const { id } = req.params
    let index = coins.findIndex(c => c.id === Number(id))

    if (index !== -1) {
      coins.splice(index, 1)
    }
    res.status(200).send(coins)
  },

  deleteCoinFavorites: (req, res) => {
    const { id } = req.params
    let index = coinFavorites.findIndex(c => c.id === Number(id))

    if (index !== -1) {
      coinFavorites.splice(index, 1)
    }
    res.status(200).send(coinFavorites)
  }
}