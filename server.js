//initialize express
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//to use our css files
app.use(express.static('public'));

//use api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//to make server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  