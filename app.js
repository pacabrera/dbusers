// Node js MongoDb CRUD RestApi
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Idea = require('./models/Idea')
// express Initialization
const app = express();

// DB Config
const db = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;


// Connect to mongoose
mongoose.connect(db.mongoURI, {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// cross origin mioddleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next();
});


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome To Nodejs CRUD Rest api';
  res.json({
    title: title
  })
});


// Creating idea Route
app.post('/post', (req, res) => {

  const idea = new Idea;
  idea.username = req.body.username;
  idea.password = req.body.password;

  idea.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully Registered" });
  })
})


// Reading all ideas Route
app.get('/getideas', (req, res) => {

  Idea.find({isWatched:'true'}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  })
})




// Using port 5000 or environmental port
const port = process.env.PORT || 5000;


// Starting server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
