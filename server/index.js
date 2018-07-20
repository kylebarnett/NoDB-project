const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/coins', controller.getCoins)
app.get('/api/globalData', controller.getGlobalData)
app.post('/api/coins', controller.addCoins)
app.delete('/api/coins/:id', controller.deleteCoin)

const port = 7070

app.listen(port, ()=>{
  console.log("Yer a Wizard Harry", port)
})
