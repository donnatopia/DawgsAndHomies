// creating express server
const express = require('express');
const server = express();

// middleware
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

// serving static files and generated assets in ../client/dist
server.use(express.static(path.join(__dirname, '../client/dist')));

// add routes


// catch any remaining requests and reserving static assets
// this is pages will sustain through refreshes
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';

// listening at server port
server.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log('Error connecting server to port', err);
  } else {
    console.log(`Server listening at http://${SERVER_HOST}:${SERVER_PORT}`)
  }
})
