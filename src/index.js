const express= require('express');
const app= express();

const User//=require('./models/User');

app.listen(3000, ()=>{
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/users',(req,res)=>{
  // User.create()
User.create({},function (err,users) {
})
})

app.get('/users', function (req, res) {
  User.find({}, function (err, users) {
        res.send(users);
    })
})
