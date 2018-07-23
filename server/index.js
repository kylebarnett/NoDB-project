const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/coins', controller.getCoins)
app.get('/api/globalData', controller.getGlobalData)
app.get('/api/coinFavorites', controller.getCoinFavorites)
app.post('/api/coinFavorites', controller.addCoinFavorites)
app.post('/api/coins', controller.addCoins)
app.delete('/api/coins/:id', controller.deleteCoin)
app.delete('/api/coinFavorites/:id', controller.deleteCoinFavorites)

const port = 7070

app.listen(port, ()=>{
  console.log("Yer a Wizard Harry", port)
})
