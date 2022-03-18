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

app.post('/registerCode', async(req,res) =>{

      await traking.create({ code: req.body.code, userId: req.body.userId, currentLocal: 'São José dos Campos', deadline: req.body.date, finalLocal: req.body.destiny });

});

app.post('/validateLogin', async(req,res) =>{
      let userId = await user.findOne({
            where: {login: req.body.login, password: req.body.password},
            attributes: ['id'],     
      });

      res.send(JSON.stringify(userId))
});
 
app.post('/getUsers', async(req,res) =>{
      let response = await user.findAll({
            attributes: ['id', 'name', 'login', 'createdAt']
      });
      
      res.send(JSON.stringify(response))
});
 
app.post('/getUserById', async(req,res) =>{
      let response = await user.findOne({
            where: { id: req.body.id }
      });

      res.send(JSON.stringify(response))
});
 
app.post('/updateUserData', async(req,res) =>{
      await user.update({ name: req.body.name, password: req.body.password }, {
            where: {
                  id: req.body.id
            }
      });

      res.send(JSON.stringify('success'))
});
 
app.post('/getCodesList', async(req,res) =>{
 
      if(req.body.admin == 1){
            let response = await traking.findAll({
                  attributes: ['id','code', 'finalLocal', 'userId', 'currentLocal', 'deadline'],     
                  order:[['deadline','ASC']],
                  include: [user],
            });

            res.send(JSON.stringify(response))
      }else{
            let response = await traking.findAll({
                  attributes: ['id','code', 'finalLocal', 'userId', 'currentLocal', 'deadline'],
                  order: [['deadline', 'ASC']],
                  where: { userId: req.body.userId},
                  include: [user],
            });

            res.send(JSON.stringify(response))
      }  
});
 
app.post('/getCodeDataById', async(req,res) =>{
 
      let response = await traking.findOne({
            where: { id: req.body.id },
            include: [user],     
      });

      res.send(JSON.stringify(response))
      
});
 
app.post('/getCodeDataByCode', async(req,res) =>{
 
      let response = await traking.findOne({
            where: { code: req.body.code },
            include: [user],     
      });

      if (response == null) {
            res.send(JSON.stringify('not Found'))
      } else {
            res.send(JSON.stringify(response))
      };
});


app.post('/checkIfCodeAlreadyExists', async(req,res) =>{
      let response = await traking.findOne({
            where: { code: req.body.code }
      });

      if (response == null) {
            res.send(JSON.stringify('success'))
      } else {
            res.send(JSON.stringify('error'))
      };
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
      console.log('Running server');
});