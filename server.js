

// Imports
const express = require ('express');
const mongoose = require ('mongoose');
const parser = require ('body-parser');
const config = require ('./config');

// Routes
const product_route = require ('./routes/product.route');
const sprint_route = require ('./routes/sprint.route');
const story_route = require ('./routes/story.route');
const user_route = require ('./routes/user.route');

// Fields (Constants)
const mongo_url = process.env.MONGODB_URI || config.mongo_url;
const server = express ();
const port = 3000;

// Connects to the mongo server
mongoose.connect (mongo_url, { useNewUrlParser: true });
mongoose.connection.on ('error', console.error.bind(console, 'MongoDB error:'));

// Applies middleware
server.use (parser.json ());
server.use (parser.urlencoded ({ extended: false }));

// CORS middleware
server.use (( req, res, next ) => {
  res.header ( 'Access-Control-Allow-Origin', '*' );
  res.header ( 'Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE' );
  res.header ( 'Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept' ); 
  next ();
});

// Registers routes n' starts the server
server.use ( '/products', product_route );
server.use ( '/sprints', sprint_route );
server.use ( '/stories', story_route );
server.use ( '/users', user_route );
server.listen ( port, _ => { console.log ( `Server listening on port: ${port}.` ) });