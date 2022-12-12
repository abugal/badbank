//For creating web application

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = 4000
const { createNewAccount, deposit, withdraw, balance, transfer } = require('./db')

app.post('/create', express.json(), (req, res) => {
  createNewAccount(req.body, (msg) => {
    res.json({ 'sts': 'success', msg })

  })

})

app.put('/transfer', express.json(), (req, res) => {
  transfer(req.body, msg => {
    res.json({ 'sts': 'success', msg })

  })

})

app.put('/withdraw', express.json(), (req, res) => {
    withdraw(req.body, msg => {
    res.json({ 'sts': 'success', msg })
  })

})

app.put('/deposit', express.json(), (req, res) => {
  deposit(req.body, msg => {
    res.json({ 'sts': 'success', msg })
  })


})

app.get('/balance/:acId', (req, res) => {
  console.log(req.params)
  const acId = req.params.acId
  //balance(Acid)
  balance(acId, bal => {
    res.json({ bal })

  })
})



app.listen(port, () => {
  console.log(`Bank Pro App listening on port ${port}`)
})
