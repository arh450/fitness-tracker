const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 8080;

const app = express();

// middleware for morgan and express
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});