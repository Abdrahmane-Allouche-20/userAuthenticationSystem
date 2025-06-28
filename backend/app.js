require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/user');
const connectDB = require('./database/connect');


// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/v1/user', userRoute);


const PORT = process.env.PORT || 4000;

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => { console.log(`server listening on ${PORT}`) })
  } catch (error) {
    console.log(error.message)
  }
}

Start()
