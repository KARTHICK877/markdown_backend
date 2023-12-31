const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const markdownRoutes = require('./routes/markdownroutes');
const authRoutes = require('./routes/authRoutes'); 
const { db } = require('./db/connect');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

db();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/markdown', markdownRoutes);
app.use('/api/auth', authRoutes); 
const crypto = require('crypto');

// Generate a Strong Secret Key: jwt-

// const secretKey = crypto.randomBytes(22).toString('hex');
// console.log('JWT_SECRET:', secretKey);


app.get("/" , (req, res)=> {
  res.send("welcome my MARKDOWN APP")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
