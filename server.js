const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let server = '';

// Import all routes
const mongodb = require('./server/mongo/config');
const api = require('./server/routes/api');
const productApi = require('./server/routes/productApi');

const app = express();

// CORS on ExpressJS - Enable All CORS Requests
app.use(cors());

// Testing Mongo connection
const db = mongodb.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// Setting up the APIs
app.use('/api/v1', api);
app.use('/api/v1/products', productApi);

server = app.listen(process.env.PORT || 8000, () => {
  const { port } = server.address();
  console.log('Server is running on port', port);
});
