const express = require('express')
const app = express()
const port = 3000

var apiMocker = require('connect-api-mocker');
const resp = require("./response.json")
app.get('/data/2.5/weather', (req, res) => {
    console.log("hi")
    res.send(resp);    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

