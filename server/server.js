require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/connectDB');
connectDB();

const port = process.env.PORT || 8081;

app.use(express.json());
app.use('/api', require('./routes/userROUTES'));
app.use('/api/post', require('./routes/postRoutes'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port:", port);
  }
});
