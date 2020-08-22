const express= require('express');
const app= express();

const User=require('./models/User');

app.listen(3000, ()=>{
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.route('/users')
// READ
.get((req,res)=>{
  // User.findById()
        )
})
