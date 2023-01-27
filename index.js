const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000
const DEFAULT_TIMEOUT = process.env.DEFAULT_TIMEOUT || 1

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/suspend', (req, res) => {
  const { query } = req
  const timeout = (query.timeout || DEFAULT_TIMEOUT) * 1e3
  setTimeout(() => {
    res.send(`Suspended call done in ${timeout / 1e3}.`)
  }, timeout)
})

app.post('/suspend', (req, res) => {
  const { query, body } = req
  const timeout = (query.timeout || DEFAULT_TIMEOUT) * 1e3
  setTimeout(() => {
    res.send(body)
  }, timeout)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
