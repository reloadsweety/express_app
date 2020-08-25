const express = require('express')
const bodyParser = require('body-parser');
const users = require('./data/user_data')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', (req, res) => {
  res.send(users)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});