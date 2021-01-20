'use srtict';
require('dotenv').config();
// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/server.js').start(process.env.PORT);
// bring in dependencies
// npm i to install them
require('dotenv').config();
const express = require('express');
//to initialize
const app = express();
//require middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverError = require('./error-handler/500');
const TodoRoute = require('./routes/todo-route');

const PORT = process.env.PORT;

//express global middleware
app.use(express.json());
//our own global middleware
app.use(logger);
app.use(TodoRoute);

//error handlers
app.use('*', notFoundHandler);
app.use(serverError);

//export
module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error("missing port"); }
        app.listen(port, () => console.log(`Listening on ${port}`));
    },
};

