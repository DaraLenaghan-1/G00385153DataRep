const express = require('express')
//const cors = require('cors');
const app = express()
const port = 4000
var bodyParser = require('body-parser')

//app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//---------------------//
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//----------------------//

// Handles any requests that don't match the ones above
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const showSchema = new mongoose.Schema({
  ShowName: String,
  ShowPic: String,
  ShowDescription: String
});

const showModel = mongoose.model('fdgdfgdfgdfg', showSchema);

app.post('/api/shows',(req,res)=>{
  console.log(req.body);

  showModel.create({
    ShowName: req.body.ShowName,
    ShowPic:req.body.ShowPic,
    ShowDescription:req.body.ShowDescription
  })
  
  res.send('Data Recieved');
})

app.get('/api/shows', (req, res) => {
  showModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/show/:id', (req, res)=>{
  console.log(req.params.id);
  showModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/show/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  showModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/show/:id',(req, res)=>{
  console.log('Deleting: '+req.params.id);
  showModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
res.sendFile(path.join(__dirname+'/../build/index.html'));//--------------------------//
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})