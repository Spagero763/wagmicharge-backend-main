const express = require('express');
const app = express();
const orderRouter = require('./routes/order');

app.use(express.json());
app.use('/order', orderRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});