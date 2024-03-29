const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

/* models declarations */
let user = models.User;

app.get('/', (req, res) => {
      res.send('Meu servidor backend ja esta funcionando');
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
      console.log('Running server');
});