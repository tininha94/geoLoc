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
      let response = await user.findOne({
            where: {login: req.body.login}
      });
      
      if (response != null){
            res.send(JSON.stringify('error'))
      }else{
            await user.create({ name: req.body.name, login: req.body.login, password: req.body.password });
            res.send(JSON.stringify('success'))
      };
});

app.post('/login', async(req,res) =>{
      let response = await user.findOne({
            where: {login: req.body.login, password: req.body.password}
      });

      if (response == null){
            res.send(JSON.stringify('error'))
      }else{
            res.send(JSON.stringify('success'))
      };
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
      console.log('Running server');
});