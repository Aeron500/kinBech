const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')
const userRoute = require('./routes/users')
const productRoute=require('./routes/products')
const connectToDb = require('./connection/dbConnect')
const app = express()
require('dotenv').config()
const port = 4000
connectToDb()
app.use(express.json({limit:'50mb'}))


app.use(cors())
app.use('/',userRoute)
app.use('/',productRoute)

console.log("connected to database");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
