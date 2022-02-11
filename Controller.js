const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* models declarations */
let user=models.User;
let traking=models.Traking;
let product=models.Product;

app.post('/register', async(req,res) =>{

      console.log(response)
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
      console.log('Running server');
});