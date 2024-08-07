const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
dotenv.config();
const userRoutes = require('./routes/userRoutes')

connectDB();
app.use(express.json());
app.use(cors({
  origin: '*',
 
}));

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.use('/api/user',userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000,()=>{
  console.log('server is running on port 5000');
})