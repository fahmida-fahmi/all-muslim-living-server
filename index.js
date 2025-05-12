// index.js
const express = require( 'express');
const mongoose = require( 'mongoose');
const cors = require( 'cors');
const bioDataRouter = require('./Router/biodataRouter');
const ignoreBioDataRouter = require('./Router/ignoreBioDataRouter');
const favListRouter = require('./Router/favListRouter');
const usersRouter = require('./Router/usersRouter');
const jwtRouter = require('./Router/jwtRouter');
const packageRouter = require('./Router/package');
const paymentRouter = require('./Router/sslCommerz');

require("dotenv").config();

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


app.use('/biodatas', bioDataRouter);

app.use('/ignoreLists', ignoreBioDataRouter)

app.use('/favLists', favListRouter)

app.use('/users', usersRouter)

app.use('/jwt', jwtRouter)

app.use('/payment', paymentRouter)

app.use('/connections', packageRouter)




// Mongoose connection
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL); // Simplified connection
      console.log('Connected to MongoDB Atlas!');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
      process.exit(1); // Exit the application on connection failure
    }
  };
app.get('/', (req, res) => {
  res.send('This web is successfully running');
});

app.listen(process.env.PORT, () => {
    connectDB()
  console.log(`App is running on port ${process.env.PORT}`);
});
