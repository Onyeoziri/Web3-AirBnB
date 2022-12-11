const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const app = express();
app.use(cors({origin: true}))
const port = 4000

userDatabase = [
  {
    user: "pmanal1",
    pass: "MockPassword123!"
  }
];
homeDatabase = [];

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
