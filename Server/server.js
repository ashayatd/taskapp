const express = require('express')
const app = express()
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT;
const userRoutes = require('./router/user-router'); 
require('./helper/connection')();

app.use('/userApi',userRoutes);

app.get('/api', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})