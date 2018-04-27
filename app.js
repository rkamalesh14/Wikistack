const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.use(body.urlencoded({extended: false}));




