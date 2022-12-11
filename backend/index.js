const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const app = express();
app.use(cors({origin: true}))
const port = 4000

let userDatabase = [
  {
    user: "pmanal1",
    pass: "MockPassword123!"
  }
];
let homeDatabase = [
  {
    name: "Apartment",
    location: "New York",
    cost: 500,
    reserved: ''
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to the AirBn3 backend!')
})

app.post('/login', jsonParser, (req, res) => {
  const user = userDatabase.find(user => {
    if(req.body.user === user.user) {
      return user;
    }
  });
  
  if(!user || user.pass !== req.body.pass) {
    res.send(false);
  } else {
    res.send(user);
  }
});

app.get('/home', (req, res) => {
  res.send(homeDatabase);
})

app.post('/home', jsonParser, (req, res) => {
  const home = {
    name: req.body.name,
    location: req.body.location,
    cost: req.body.cost,
    reserved: ''
  }

  if(!home.name || !home.location || !home.cost) {
    res.send("Missing params");
  } else {
    console.log(home);
    homeDatabase.push(home);
    res.status(200);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
