const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('criação api')
})

app.listen(port, () => {
  console.log(`server ligado ${port}`)
})