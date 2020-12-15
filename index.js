/* eslint-disable no-undef */
const express = require('express');
require('colors');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const bookRoute = require('./routes/bookRoute');

app.use('/check', (req, res) => {
  res.send('server up');
});
app.use('/api/v1/book', bookRoute);
module.exports = app;
