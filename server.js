const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3002;

// middleware to access styling and frontend javascript
app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);







app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});