const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const url = 'mongodb://localhost:27017/MyBooks';
    const conn = await mongoose.connect(url);
    console.log(`database connected `.cyan.underline.bold);
    return conn;
  } catch (error) {}
};

module.exports = connectDB;
