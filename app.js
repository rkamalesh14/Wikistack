const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const index = require('./views/index')

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));


app.get("/main", (req, res, next) => {
  let test = index.main("")
  res.send(test)
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
