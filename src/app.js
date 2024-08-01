const express = require('express');
const app = express();
const cors = require('cors');
const favicon = require('express-favicon');
const logger = require('morgan');
const mainRouter = require('./routes/mainRouter');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(favicon(__dirname + '/../public/favicon.ico'));

// Routes
app.use('/api/v1', mainRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

module.exports = app;
