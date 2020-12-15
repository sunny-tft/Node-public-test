const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const app = require('./index');
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`.yellow.bold);
  });
});
