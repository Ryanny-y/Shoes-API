const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const connectDB = require('./config/connDB');
const cors = require('cors');
const insertToDataBase = require('./model/product');

// Connect To MongoDB
connectDB();

// APP
const port = process.env.port || 3000;

// middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// routers
app.use('/', require('./routes/root'));
app.use('/products', require('./routes/api/products'));
app.use('/cart', require('./routes/api/cart'));

app.all('*', (req,res) => {
  res.status(404);
  if(req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if(req.accepts('json')) {
    res.json({"message": "404 Not Found!"});
  } else if(res.accepts('text')) {
    res.type('text').send('404 Not Found!');
  }
});

mongoose.connection.once('open', () => {
  console.log('Connected To MongoDB');
  app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
  });
})
