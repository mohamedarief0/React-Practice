const express = require('express')
const app = express()
const port = 5000

app.post('/', async(req, res) => {
  console.log(`Example app listening on port ${port}`)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})