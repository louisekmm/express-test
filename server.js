var express = require('express')
var app = express()
var port = 3000

app.get('/', (req, res) => {
  res.sendFile('/Users/vitoraugustocorrea/Desktop/Louise/Estudos/api-test/index.html')
})

app.get('/pets', (req, res) => {
  var pets = [];

  for (let index = 0; index < 10; index++) {
    var conectaBd = 'SELECT * FROM ....';
    pets.push('Pet ' + index)
  }

  res.send(pets)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})