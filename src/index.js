app.listen(3000, ()=>{
})

app.get('/', function (req, res) {
  res.send('hello world')
})
