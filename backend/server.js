const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/snehaldb'

mongoose
  .connect(mongoURI,
    { 
      useNewUrlParser: true,useUnifiedTopology: true 
     }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users);

const appoinmentsRouter = require('./routes/appoinments');
const addresssRouter = require('./routes/addresss');

app.use('/appoinments', appoinmentsRouter);
app.use('/addresss', addresssRouter);
 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});