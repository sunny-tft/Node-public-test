const mongoose = require('mongoose');
const config = require('./config');
const connectDB = async () => {
  try {
    const url = config.get('db.url');
    const conn = await mongoose.connect(url);
    console.log(`database connected `.cyan.underline.bold);
    return conn;
  } catch (error) {}
};

module.exports = connectDB;
